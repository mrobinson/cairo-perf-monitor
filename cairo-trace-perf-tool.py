#!/usr/bin/env python3

import multiprocessing
import os
import pickle
import pygit2
import leveldb
import subprocess
import sys

PERFORMANCE_RESULTS_PATH = "performance-results.db"
DEFAULT_CAIRO_PATH = "../cairo"

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

    def walk_commit_range(self, commit_range, branch='master'):
        self.checkout(branch)

        process = subprocess.Popen(['git', 'log', '--pretty=oneline', commit_range],
                                   cwd=self.repository_path, stdout=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        process.wait()

        hashes = [line.split(' ')[0] for line in stdout.decode().strip().splitlines()]
        try:
            for index, commit_hash in enumerate(hashes):
                self.checkout(commit_hash)
                yield (commit_hash, len(hashes) - index)
        finally:
            self.checkout(branch)

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

    def run(self, commit_range):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        print('Running trace {0} for {1}'.format(self.trace, commit_range))
        commits = self.repository.walk_commit_range(commit_range)
        for commit, commits_left in commits:
            print('Testing {0} ({1} left)'.format(commit, commits_left))
            self.run_for_commit(commit)

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
    if len(sys.argv) < 2:
        print('Need to provide the path to the Cairo trace and commit range')
        sys.exit(1)

    database = leveldb.LevelDB(PERFORMANCE_RESULTS_PATH)
    runner = PerfTraceRun(CairoRepository(DEFAULT_CAIRO_PATH), database, 'image', sys.argv[1])
    runner.run(sys.argv[2])

