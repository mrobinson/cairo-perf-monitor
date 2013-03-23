#!/usr/bin/env python3

import os
import subprocess
import sys

class CairoRepository(object):
    def __init__(self, repository_path):
        self.repository_path = repository_path

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
    print(repository.run_trace('image', 'benchmark/gvim.trace'))
