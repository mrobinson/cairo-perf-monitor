#!/usr/bin/env python3

import json
import leveldb
import multiprocessing
import os
import pickle
import pygit2
import subprocess
import sys

from string import Template

PERFORMANCE_RESULTS_PATH = "performance-results.db"
DEFAULT_CAIRO_PATH = "../cairo"
SCRIPT_PATH = os.path.dirname(os.path.realpath(__file__))
TEMPLATE_PATH = os.path.join(SCRIPT_PATH, 'index.html.template')
UI_PATH = SCRIPT_PATH
REPORT_PATH = os.path.join(UI_PATH, 'reports')

class CairoRepository(pygit2.Repository):
    def __init__(self, repository_path):
        super().__init__(repository_path)
        self.repository_path = repository_path
        self.failed_to_build = False
        self.built = False
        self.current_commit = None

    def working_tree_clean(self):
        status = self.status()
        for filepath, flags in status.items():
            if flags != pygit2.GIT_STATUS_CURRENT and \
               flags != pygit2.GIT_STATUS_WT_NEW and \
               flags != pygit2.GIT_STATUS_IGNORED:
                return False
        return True

    def checkout(self, arg='master'):
        if self.current_commit == arg:
            return

        process = subprocess.Popen(['git', 'checkout', arg], cwd=self.repository_path,
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        status = process.wait()
        if status:
            print("Could not checkout {0}".format(arg))
            print(stdout)
            print(stderr)
            sys.exit()
        else:
            self.built = False
            self.failed_to_build = False
            self.current_commit = arg

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

        if self.built:
            return

        process = subprocess.Popen(['make', '-j{0}'.format(multiprocessing.cpu_count())],
                                   cwd=self.repository_path,
                                   stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        status = process.wait()

        self.failed_to_build = bool(status)
        self.built = not bool(status)

    def hashes_in_commit_range(self, commit_range, branch='master'):
        # If there are no range characters in this range, just interpret it as
        # a commit identifier.
        if not '..' in commit_range:
            return [commit_range]

        self.checkout(branch)
        process = subprocess.Popen(['git', 'log', '--pretty=oneline', commit_range],
                                   cwd=self.repository_path, stdout=subprocess.PIPE)
        (stdout, stderr) = process.communicate()
        process.wait()
        return [line.split(' ')[0] for line in stdout.decode().strip().splitlines()]


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

        print('Running trace {0} for {1}'.format(self.trace, self.commit_range))
        report = {
            'test': self.test_description(),
            'commitRange': self.commit_range,
            'backends': self.backends,
            'results': [],

        }
        try:
            hashes = self.repository.hashes_in_commit_range(self.commit_range)
            for i, commit_hash in enumerate(hashes):
                print('Testing {0} ({1} left)'.format(commit_hash, len(hashes) - i))
                report['results'].insert(0, self.get_results_for_commit(commit_hash))
        finally:
            self.repository.checkout('master')
        return report

    def get_results_for_commit(self, commit):
        result = {'commit': commit,
                  'message': self.repository.commit_description(commit)}

        for backend in backends:
            result[backend] = self.get_results_for_commit_and_backend(commit, backend)
            if self.repository.failed_to_build:
                print('    Failed to build commit, skipping!')
                break

        return result

    def get_results_for_commit_and_backend(self, commit, backend):
        old_result = self.result_from_database(commit, backend)
        if old_result:
            print('    Have results in database for {0} at {1}, skipping'.format(backend, commit))
            return old_result

        self.repository.checkout(commit)
        if not self.repository.built:
            print('    Building...')
            self.repository.build()

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

    def filename(self):
        return self.test_description().replace('-', '_')

    def trace_results_key(self, commit, backend):
        return '{0}-{1}-{2}'.format(self.test_description(), backend, commit).encode()

    def perf_trace_path(self):
        return os.path.join(self.repository.repository_path, "perf", "cairo-perf-trace")

    def run_test(self, backend):
        env = os.environ.copy()

        msaa = '-msaa' in backend
        if msaa:
            backend = backend.replace('-msaa', '')
            env['CAIRO_GL_COMPOSITOR'] = 'msaa'
        else:
            env['CAIRO_GL_COMPOSITOR'] = 'foo'

        cache_images = not '-nocache' in backend
        if not cache_images:
            backend = backend.replace('-nocache', '')

        env['CAIRO_TEST_TARGET'] = backend

        args = [self.perf_trace_path(), '-r', self.trace]
        if cache_images:
            args.append('-c')

        process = subprocess.Popen(args, stdout=subprocess.PIPE, env=env)
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

class JSONFormatter(object):
    def __init__(self, report):
        self.report = report

    def write(self, filename):
        print('Writing report to {0}'.format(filename))
        with open(os.path.join(filename), 'w') as output:
            output.write(self.format())

    def format(self):
        return json.dumps(self.report.get_report(), indent=1)

class JSFormatter(JSONFormatter):
    def format(self):
        return 'var {0} = {1};'.format(self.report.filename(),
                                       super(JSFormatter, self).format())
    def write(self, filename):
        super(JSFormatter, self).write(filename)
        self.update_frontend()

    def update_frontend(self):
        script_template = Template('        <script type="text/javascript" src="reports/$report.js"></script>\n')
        graph_template = Template('            graphFromTrace($report);\n')

        scripts = ''
        graphs = ''
        for filename in os.listdir(REPORT_PATH):
            if not filename.endswith('.js'):
                continue
            filename = filename.replace('.js', '')
            scripts += script_template.substitute(report=filename)
            graphs += graph_template.substitute(report=filename)

        template = Template(open(TEMPLATE_PATH).read())
        with open(os.path.join(UI_PATH, 'index.html'), 'w') as output:
            output.write(template.substitute(scripts=scripts, graphs=graphs))

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print('Need to provide the path to the Cairo trace and commit range')
        sys.exit(1)

    repository = CairoRepository(DEFAULT_CAIRO_PATH)
    backends = sys.argv[1].split(',')

    report = PerfTraceReport(repository, backends, sys.argv[2], sys.argv[3])
    output_file = os.path.join(REPORT_PATH, report.filename() + '.js')
    JSFormatter(report).write(output_file)
