#!/usr/bin/env python3

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

    def perf_trace_path(self):
        return os.path.join(self.repository_path, "perf", "cairo-perf-trace")

    def trace_path(self, path):
        return os.path.join(self.repository_path, "perf", "cairo-traces", path)

    def run_trace(self, backend, trace):
        return self.parse_perf_tool_output(self.run_perf_tool(backend, trace))

    @staticmethod
    def parse_perf_tool_output(output):
        for line in output.splitlines():
            if not line.startswith('[*]'):
               continue
            return line.split(' ')[3:]
        return []

    def run_perf_tool(self, backend, trace):
        env = os.environ.copy()
        env['CAIRO_TEST_TARGET'] = backend

        process = subprocess.Popen([self.perf_trace_path(), '-r', self.trace_path(trace)],
                                    stdout=subprocess.PIPE, env=env)
        (stdout, stderr) = process.communicate()
        process.wait()
        return str(stdout, encoding='utf8')

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Need to provide the path to the Cairo repository")
        sys.exit(1)

    repository = CairoRepository(sys.argv[1])

    if not(repository.working_tree_clean()):
        print("Repository does not have a clean working tree.")
        sys.exit(1)

    print(repository.run_trace('image', 'benchmark/gvim.trace'))
