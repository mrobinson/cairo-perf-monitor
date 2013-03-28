#!/usr/bin/env python3

import multiprocessing
import os
import pickle
import pygit2
import leveldb
import subprocess
import sys

PERFORMANCE_RESULTS_PATH = "performance-results.db"

class CairoRepository(pygit2.Repository):
    def __init__(self, repository_path):
        super().__init__(repository_path)
        self.repository_path = repository_path

    def working_tree_clean(self):
        status = self.status()
        for filepath, flags in status.items():
            if flags != pygit2.GIT_STATUS_CURRENT and \
               flags != pygit2.GIT_STATUS_WT_NEW and \
               flags != pygit2.GIT_STATUS_IGNORED:
                return False
        return True

    def checkout(self, arg='master'):
        process = subprocess.Popen(['git', 'checkout', arg], cwd=self.repository_path,
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        status = process.wait()
        if status:
            print("Could not checkout {0}".format(arg))
            print(stdout)
            print(stderr)
            sys.exit()

    def build(self):
        if not os.path.exists(os.path.join(self.repository_path, "config.log")):
            print("Need to run configure before using this tool")
            sys.exit()

        process = subprocess.Popen(['make', '-j{0}'.format(multiprocessing.cpu_count())],
                                   cwd=self.repository_path,
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        status = process.wait()
        return not status

    def walk_back(self, number_of_commits, branch='master'):
        self.checkout('master')

        try:
            while number_of_commits > 0:
                yield self.head.hex
                number_of_commits = number_of_commits - 1
                self.checkout('HEAD~')
        finally:
            self.checkout('master')

class PerfTraceRun(pygit2.Repository):
    def __init__(self, repository, database, backend, trace):
        self.repository = repository
        self.database = database
        self.backend = backend
        self.trace = trace

    def trace_results_key(self, commit):
        trace_name = os.path.basename(self.trace).replace('.trace', '')
        return '{0}-{1}-{2}'.format(trace_name, self.backend, commit).encode()

    def has_trace_result(self, commit):
        try:
            self.database.Get(self.trace_results_key(commit))
            return True
        except:
            return False

    def write_trace_result(self, commit, result):
        try:
            pickled_result = pickle.dumps(result)
            self.database.Put(self.trace_results_key(commit), pickled_result)
        except Exception as e:
            print('Couldn\'t write {0} results to database: {1}'.format(commit, e))

    def run_for_commit(self, commit):
        if self.has_trace_result(commit):
            print('    Have results in database for {0}, skipping'.format(commit))
            return

        new_result = {'commit': commit,
                      'results': [],
                      'normalization': 1}
        print('    Building...')
        if not self.repository.build():
            print('    Failed to build commit, skipping!')
        else:
            print('    Running trace...')
            (normalization, results) = self.parse_perf_tool_output(self.run_perf_tool())
            new_result['normalization'] = normalization
            new_result['results'] = results


        print('    Writing results...')
        self.write_trace_result(commit, new_result)

    def run(self, number_of_commits):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        print('Running trace {0} for {1} commits'.format(self.trace, number_of_commits))
        commits = self.repository.walk_back(number_of_commits)
        for commit in commits:
            print('Testing {0} ({1} left)'.format(commit, number_of_commits))
            self.run_for_commit(commit)
            number_of_commits = number_of_commits - 1

    def perf_trace_path(self):
        return os.path.join(self.repository.repository_path, "perf", "cairo-perf-trace")

    def run_perf_tool(self):
        env = os.environ.copy()
        env['CAIRO_TEST_TARGET'] = self.backend

        process = subprocess.Popen([self.perf_trace_path(),
                                    '-c', # cache images
                                    '-r', # raw output
                                     self.trace],
                                    stdout=subprocess.PIPE, env=env)
        (stdout, stderr) = process.communicate()
        process.wait()
        return str(stdout, encoding='utf8')

    @staticmethod
    def parse_perf_tool_output(output):
        for line in output.splitlines():
            if not line.startswith('[*]'):
               continue
            parts = line.split(' ')
            return (float(parts[3]), [float(x) for x in parts[4:]])
        return (0, 0)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print('Need to provide the path to the Cairo repository')
        sys.exit(1)

    database = leveldb.LevelDB(PERFORMANCE_RESULTS_PATH)
    runner = PerfTraceRun(CairoRepository(sys.argv[1]), database, 'image', sys.argv[2])
    runner.run(4)

