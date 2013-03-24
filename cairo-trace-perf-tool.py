#!/usr/bin/env python3

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
    def __init__(self, repository, ):
        self.repository = repository

        env = os.environ
        if not 'CAIRO_TRACE_DIR' in env:
            env['CAIRO_TRACE_DIR'] = os.path.join(self.repository.repository_path, "perf", "cairo-traces")

    def run(self, backend, trace, number_of_commits):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        print('Running trace {0} for {1} commits'.format(trace, number_of_commits))
        commits = self.repository.walk_back(number_of_commits)
        for commit in commits:
            print('Testing {0} ({1} left)'.format(commit, number_of_commits))

            print('    Building...')
            if not self.repository.build():
                print('    Failed to build, skipping!')
                print([commit, 0, 0])
                continue

            print('    Running trace...')
            results = self.run_trace(backend, trace)
            print([commit] + results)
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

    def run_trace(self, backend, trace):
        return self.parse_perf_tool_output(self.run_perf_tool(backend, trace))

    @staticmethod
    def parse_perf_tool_output(output):
        for line in output.splitlines():
            if not line.startswith('[*]'):
               continue
            return line.split(' ')[3:]
        return []

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print('Need to provide the path to the Cairo repository')
        sys.exit(1)

    runner = PerfTraceRunner(CairoRepository(sys.argv[1]))
    runner.run('image', 'benchmark/gvim.trace', 2)

