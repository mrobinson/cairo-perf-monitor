#!/usr/bin/env python3

import json
import leveldb
import multiprocessing
import os
import pickle
import pygit2
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

    def commit_description(self, commit):
        process = subprocess.Popen(['git', 'log', '-n', '1', commit],
                                   cwd=self.repository_path,
                                   stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        status = process.wait()
        return (stdout + stderr).decode()

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

class PerformanceReport(object):
    def __init__(self, repository, backends, commit_range):
        self.repository = repository
        self.backends = backends
        self.commit_range = commit_range
        self.database = leveldb.LevelDB(self.database_path())

    def result_from_database(self, commit, backend):
        try:
            return pickle.loads(self.database.Get(self.trace_results_key(commit, backend)))
        except:
            return None

    def write_result(self, commit, backend, result):
        try:
            pickled_result = pickle.dumps(result)
            self.database.Put(self.trace_results_key(commit, backend), pickled_result)
        except Exception as e:
            print('Couldn\'t write {0} at {1} results to database: {1}'.format(backend, commit, e))

    def get_report(self):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        report = {
            'test': self.test_description(),
            'commitRange': self.commit_range,
            'backends': self.backends,
            'results': [],
        }
        results = report['results']

        print('Running trace {0} for {1}'.format(self.trace, self.commit_range))
        commits = self.repository.walk_commit_range(self.commit_range)
        for commit, commits_left in commits:
            result = {'commit': commit,
                      'message': self.repository.commit_description(commit)}

            print('Testing {0} ({1} left)'.format(commit, commits_left))

            print('    Building...')
            if not self.repository.build():
                print('    Failed to build commit, skipping!')
                continue
            for backend in backends:
                result[backend] = self.get_results_for_commit_and_backend(commit, backend)
            results.insert(0, result)
        return report

    def get_results_for_commit_and_backend(self, commit, backend):
        old_result = self.result_from_database(commit, backend)
        if old_result:
            print('    Have results in database for {0} at {1}, skipping'.format(backend, commit))
            return old_result

        print('    Running trace for {0}...'.format(backend))
        (normalization, results) = self.run_test(backend)
        new_result = {'samples': results,
                      'normalization': normalization}

        print('    Writing results...')
        self.write_result(commit, backend, new_result)
        return new_result

class PerfTraceReport(PerformanceReport):
    def __init__(self, repository, backends, trace, commit_range):
        super().__init__(repository, backends, commit_range)
        self.trace = trace

    def database_path(self):
        return PERFORMANCE_RESULTS_PATH

    def test_description(self):
        return os.path.basename(self.trace).replace('.trace', '')

    def trace_results_key(self, commit, backend):
        return '{0}-{1}-{2}'.format(self.test_description(), backend, commit).encode()

    def perf_trace_path(self):
        return os.path.join(self.repository.repository_path, "perf", "cairo-perf-trace")

    def run_test(self, backend):
        env = os.environ.copy()
        env['CAIRO_TEST_TARGET'] = backend

        process = subprocess.Popen([self.perf_trace_path(),
                                    '-c', # cache images
                                    '-r', # raw output
                                     self.trace],
                                    stdout=subprocess.PIPE, env=env)
        (stdout, stderr) = process.communicate()
        process.wait()
        return self.parse_perf_tool_output(str(stdout, encoding='utf8'))

    @staticmethod
    def parse_perf_tool_output(output):
        for line in output.splitlines():
            if not line.startswith('[*]'):
               continue
            parts = line.split(' ')
            return (float(parts[3]), [float(x) for x in parts[4:]])
        return (0, 0)

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print('Need to provide the path to the Cairo trace and commit range')
        sys.exit(1)

    repository = CairoRepository(DEFAULT_CAIRO_PATH)
    backends = sys.argv[1].split(',')

    report = PerfTraceReport(repository, backends, sys.argv[2], sys.argv[3])
    print('var {0} = {1};'.format(report.test_description(), json.dumps(report.get_report(), indent=1)))

