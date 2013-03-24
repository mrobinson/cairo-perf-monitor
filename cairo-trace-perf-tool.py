#!/usr/bin/env python3

import json
import multiprocessing
import os
import pygit2
import subprocess
import sys

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

class PerfTraceRunner(pygit2.Repository):
    def __init__(self, repository):
        self.repository = repository

    def trace_results_path(self, backend, trace):
        trace_name = os.path.basename(trace).replace('.trace', '')
        return '{0}-{1}.json'.format(trace_name, backend)

    def read_trace_results(self, path):
        if not os.path.exists(path):
            return {}
        with open(path) as results_file:
            return json.load(results_file)

    def write_trace_results(self, path, results):
        with open(path, 'w') as results_file:
            try:
                return json.dump(results, results_file, indent=1)
            except:
                return {}

    def run(self, backend, trace, number_of_commits):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        path = self.trace_results_path(backend, trace)
        print('Running trace {0} for {1} commits and updating results in {2}'.format(trace, number_of_commits, path))

        results = self.read_trace_results(path)
        commits = self.repository.walk_back(number_of_commits)
        for commit in commits:
            print('Testing {0} ({1} left)'.format(commit, number_of_commits))

            print('    Building...')
            if not self.repository.build():
                print('    Failed to build, skipping!')
                results[commit] = []
            else:
                print('    Running trace...')
                results[commit] = self.parse_perf_tool_output(self.run_perf_tool(backend, trace))

            print('    Writing results...')
            self.write_trace_results(path, results)
            number_of_commits = number_of_commits - 1

    def perf_trace_path(self):
        return os.path.join(self.repository.repository_path, "perf", "cairo-perf-trace")

    def run_perf_tool(self, backend, trace):
        env = os.environ.copy()
        env['CAIRO_TEST_TARGET'] = backend

        process = subprocess.Popen([self.perf_trace_path(), '-r', trace],
                                    stdout=subprocess.PIPE, env=env)
        (stdout, stderr) = process.communicate()
        process.wait()
        return str(stdout, encoding='utf8')

    @staticmethod
    def parse_perf_tool_output(output):
        for line in output.splitlines():
            if not line.startswith('[*]'):
               continue
            return [float(x) for x in line.split(' ')[3:]]
        return []

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print('Need to provide the path to the Cairo repository')
        sys.exit(1)

    runner = PerfTraceRunner(CairoRepository(sys.argv[1]))
    runner.run('image', sys.argv[2], 2)

