#!/usr/bin/env python3

import argparse
import configparser
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
SCRIPT_PATH = os.path.dirname(os.path.realpath(__file__))
TEST_CONFIG_PATH = os.path.join(SCRIPT_PATH, 'tests.ini')
TEMPLATE_PATH = os.path.join(SCRIPT_PATH, 'index.html.template')
REPORT_PATH = os.path.join(SCRIPT_PATH, 'reports')

class CairoRepository(pygit2.Repository):
    def __init__(self):
        repository_path = os.path.join(SCRIPT_PATH, 'cairo')
        if not os.path.exists(repository_path):
            print('Could not find cairo repository at {0}. Check it out there or make a symlink.'.format(repository_path))
            sys.exit(1)

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

    def remove_result_from_database(self, commit, backend):
        self.database.Delete(self.trace_results_key(commit, backend), sync=True)
        print('deleting {0}'.format(self.trace_results_key(commit, backend)))

    def write_result(self, commit, backend, result):
        try:
            pickled_result = pickle.dumps(result)
            self.database.Put(self.trace_results_key(commit, backend), pickled_result)
        except Exception as e:
            print('Couldn\'t write {0} at {1} results to database: {1}'.format(backend, commit, e))

    def run_tests(self, resample):
        if not(self.repository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        print('Running trace {0} for {1}'.format(self.trace, self.commit_range))
        try:
            hashes = self.repository.hashes_in_commit_range(self.commit_range)
            for i, commit_hash in enumerate(hashes):
                print('Testing {0} ({1} left)'.format(commit_hash, len(hashes) - i))
                for backend in self.backends:
                    self.run_test_for_commit_and_backend(commit_hash, backend, resample)
        finally:
            self.repository.checkout('master')

    def run_test_for_commit_and_backend(self, commit, backend, resample):
        if not resample and self.result_from_database(commit, backend):
            print('    Have results in database for {0} at {1}, skipping'.format(backend, commit))
            return True

        self.repository.checkout(commit)
        if not self.ensure_built():
            print('    Build failed, no data for {0}'.format(backend))
            if resample:
                self.remove_result_from_database(commit, backend)
            return 

        print('    Running trace for {0}...'.format(backend))
        (normalization, results) = self.run_test(backend)

        print('    Writing results...')
        self.write_result(commit, backend,
                          {'samples': results,
                           'normalization': normalization})

    def ensure_built(self):
        if self.repository.failed_to_build:
            return False
        if self.repository.built:
            return True

        print('    Building...')
        self.repository.build()
        return not self.repository.failed_to_build

    def get_report(self):
        print('Generating report for trace {0} in {1}'.format(self.trace, self.commit_range))
        report = {
            'test': self.test_description(),
            'commitRange': self.commit_range,
            'backends': self.backends,
            'results': [],
        }

        hashes = self.repository.hashes_in_commit_range(self.commit_range)
        for i, commit_hash in enumerate(hashes):
            result = {}
            result['commit'] = commit_hash
            result['message'] = self.repository.commit_description(commit_hash)

            for backend in self.backends:
                backend_result = self.result_from_database(commit_hash, backend)
                if backend_result:
                    result[backend] = backend_result
                else:
                    print('No result for {0}'.format(self.trace_results_key(commit_hash, backend)))
            report['results'].insert(0, result)
        return report


class PerfTraceReport(PerformanceReport):
    def __init__(self, repository, backends, trace, commit_range):
        super().__init__(repository, backends, commit_range)

        traces_path = os.path.join(SCRIPT_PATH, 'cairo-traces')
        if not os.path.exists(traces_path):
            print('Could not find cairo-traces repository at {0}. Check it out there or make a symlink.'.format(traces_path))
            sys.exit(1)
        self.trace = os.path.join(traces_path, trace)
        if not os.path.exists(self.trace):
            print('Could not find trace {0}'.format(self.trace))
            sys.exit(1)

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
        return (0, [0])

class JSONFormatter(object):
    def __init__(self, report):
        self.report = report

    def write(self, filename):
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

def get_tests_from_config(test=None, commit=None, backends=None):
    config = configparser.ConfigParser()
    config.read(TEST_CONFIG_PATH)

    repository = CairoRepository()
    tests = []
    for section in config.sections():
        if test and section != test:
            continue

        test_commits = commit if commit else config[section]['CommitRange']
        test_backends = backends.split(',') if backends else \
            config[section]['Backends'].split(',')
        tests.append(PerfTraceReport(repository,
                                     test_backends,
                                     config[section]['TracePath'],
                                     test_commits))
    return tests

def sample(args):
    for test in get_tests_from_config():
        test.run_tests()

def resample(args):
    for test in get_tests_from_config(test=args.test, commit=args.commit, backends=args.backends):
        test.run_tests(resample)

def make_html(args):
    output_file = os.path.join(SCRIPT_PATH, 'index.html')
    print('Updating {0}'.format(output_file))

    script_template = Template('        <script type="text/javascript" src="reports/$report"></script>\n')
    graph_template = Template('            graphFromTrace($report);\n')

    scripts = ''
    graphs = ''
    for test in get_tests_from_config():
        js_path = os.path.join(REPORT_PATH, test.filename() + '.js')
        print('    Writing test output to {0}'.format(js_path))
        JSFormatter(test).write(js_path)

        scripts += script_template.substitute(report=os.path.basename(js_path))
        graphs += graph_template.substitute(report=test.filename())

    template = Template(open(TEMPLATE_PATH).read())
    with open(output_file, 'w') as output:
        output.write(template.substitute(scripts=scripts, graphs=graphs))
    print('Wrote {0}'.format(output_file))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers()

    parser_sample = subparsers.add_parser('sample')
    parser_sample.set_defaults(func=sample)

    parser_resample = subparsers.add_parser('resample')
    parser_resample.add_argument('test', metavar='TEST', type=str,
                                 help='a test to resample')
    parser_resample.add_argument('--backends', '-b', type=str, default=None, dest='backends',
                                 help='backends to resample')
    parser_resample.add_argument('--commit', '-c', type=str, default=None, dest='commit',
                                 help='commit range or commit to resample')
    parser_resample.set_defaults(func=resample)

    parser_make_html = subparsers.add_parser('make-html')
    parser_make_html.set_defaults(func=make_html)

    args = parser.parse_args()
    args.func(args)
