#!/usr/bin/env python3

import argparse
import configparser
import json
import itertools
import multiprocessing
import os
import pickle
import pygit2
import subprocess
import sys

from string import Template
from itertools import product

PERFORMANCE_RESULTS_PATH = "performance-results.js"
SCRIPT_PATH = os.path.dirname(os.path.realpath(__file__))
TEST_CONFIG_PATH = os.path.join(SCRIPT_PATH, 'config.ini')
TEMPLATE_PATH = os.path.join(SCRIPT_PATH, 'index.html.template')
REPORT_PATH = os.path.join(SCRIPT_PATH, 'reports')

def singleton(cls):
    instance = cls()
    instance.__call__ = lambda: instance
    return instance

@singleton
class Machine(object):
    def __init__(self):
        config_file = os.path.join(SCRIPT_PATH, "machine.ini")
        if not os.path.exists(config_file):
            print("Need to create a machine.ini file.")
            sys.exit(1)

        config = configparser.ConfigParser()
        config.read(config_file)
        if not 'Machine' in config or not 'Name' in config['Machine']:
            self.name = 'unknown'
            return

        self.name = config['Machine']['Name']

    @staticmethod
    def known():
        return Config.config['Machines']['Known'].split(',')

@singleton
class Config(object):
    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read(TEST_CONFIG_PATH)

    def tests(self):
        return [self.config[section] for section in self.config.sections() if section != 'Machines']

@singleton
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

class TestRun(object):
    def __init__(self, test_name, commit_hash, backend, machine=Machine.name):
        self.test_name = test_name
        self.commit_hash = commit_hash
        self.backend = backend
        self.machine = machine

    def key(self):
        return '{0}-{1}-{2}-{3}'.format(self.test_name, self.machine, self.backend, self.commit_hash)


class Test(object):
    def __init__(self, *args, **kwargs):
        self.backends = kwargs['backends']
        self.commit_range = kwargs['commit_range']
        self.database = type(self).get_database()

    database = None
    @classmethod
    def get_database(cls):
        if cls.database:
            return cls.database

        with open(PERFORMANCE_RESULTS_PATH) as database_file:
            cls.database = json.loads(database_file.read())
        return cls.database

    @classmethod
    def write_database(cls):
        assert(cls.database)
        output = json.dumps(cls.database, sort_keys=True, indent=2)
        with open(PERFORMANCE_RESULTS_PATH, 'w') as database_file:
            database_file.write(output)

    def result_from_database(self, test_run):
        key = test_run.key()
        if not key in self.database:
            return None
        return self.database[key]

    def remove_result_from_database(self, run):
        key = test_run.key()
        print('deleting {0}'.format(key))
        del self.database[key]
        self.write_database()

    def write_result(self, run, result):
        self.database[run.key()] = result
        self.write_database()

    def run_tests(self, resample=False, mock=False):
        if not(CairoRepository.working_tree_clean()):
            raise Exception("Repository does not have a clean working tree.")

        print('Running {0} for {1}'.format(self.test_description(), self.commit_range))
        try:
            hashes = CairoRepository.hashes_in_commit_range(self.commit_range)
            for i, commit_hash in enumerate(hashes):
                print('Testing {0} ({1} left)'.format(commit_hash, len(hashes) - i))
                for backend in self.backends:
                    run = TestRun(self.test_description(), commit_hash, backend)
                    self.run_test_for_commit_and_backend(run, resample, mock)
        finally:
            CairoRepository.checkout('master')

    def run_test_for_commit_and_backend(self, run, resample, mock):
        if not resample and self.result_from_database(run):
            print('    Have results in database for {0} at {1}, skipping'.format(run.backend, run.commit_hash))
            return True

        if mock:
            print('    Writing mock results...')
            self.write_result(run, [])
            return True

        CairoRepository.checkout(run.commit_hash)
        if not self.ensure_built():
            print('    Build failed, no data for {0}'.format(run.backend))
            if resample:
                self.remove_result_from_database(run)
            return

        print('    Running trace for {0}...'.format(run.backend))
        results = self.run_test(run.backend)

        print('    Writing results...')
        self.write_result(run, results)

    def ensure_built(self):
        if CairoRepository.failed_to_build:
            return False
        if CairoRepository.built:
            return True

        print('    Building...')
        CairoRepository.build()
        return not CairoRepository.failed_to_build

    def get_report(self):
        # We save the iterator to a list, since we are going to iterate it twice
        # and it shouldn't require much memory.
        configurations = list(itertools.product(Machine.known(), self.backends))

        def config_string(config):
            return '{0}-{1}'.format(*config)

        report = {
            'test': self.test_description(),
            'commitRange': self.commit_range,
            'configurations': [config_string(config) for config in configurations],
            'results': [],
        }
        hashes = CairoRepository.hashes_in_commit_range(self.commit_range)
        for i, commit_hash in enumerate(hashes):
            result = {}
            result['commit'] = commit_hash
            result['message'] = CairoRepository.commit_description(commit_hash)

            for config in configurations:
                run = TestRun(self.test_description(), commit_hash, config[1], config[0])
                config_result = self.result_from_database(run)
                if config_result:
                    result[config_string(config)] = config_result
            report['results'].insert(0, result)
        return report


class PerfTraceTest(Test):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        traces_path = os.path.join(SCRIPT_PATH, 'cairo-traces')
        if not os.path.exists(traces_path):
            print('Could not find cairo-traces repository at {0}. Check it out there or make a symlink.'.format(traces_path))
            sys.exit(1)
        self.trace = os.path.join(traces_path, kwargs['trace'])
        if not os.path.exists(self.trace):
            print('Could not find trace {0}'.format(self.trace))
            sys.exit(1)

    def test_description(self):
        return os.path.basename(self.trace).replace('.trace', '')

    def filename(self):
        return self.test_description().replace('-', '_')

    def perf_trace_path(self):
        return os.path.join(SCRIPT_PATH, 'cairo-perf-trace')

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

        env['LD_PRELOAD'] = '{0} {1} {2}'.format(
            os.path.join(CairoRepository.repository_path, 'src', '.libs', 'libcairo.so.2'),
            os.path.join(CairoRepository.repository_path, 'util', 'cairo-script', '.libs', 'libcairo-script-interpreter.so.2'),
            os.getenv('LD_PRELOAD', ''))

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
            normalization = float(parts[3]) * 1000
            return [(float(x) / normalization) for x in parts[4:]]

        return [0]

class CanvasMicroTest(Test):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        micro_tests_path = os.path.join(SCRIPT_PATH, 'canvas-micro-tests')
        self.harness_path = os.path.join(micro_tests_path, 'harness')
        self.test_path = os.path.join(micro_tests_path, kwargs['test'])
        if not os.path.exists(self.test_path):
            print('Could not find canvas micro test: {0}'.format(self.test))
            sys.exit(1)

    def test_description(self):
        return os.path.basename(self.test_path).replace('.js', '-micro')

    def filename(self):
        return self.test_description().replace('-', '_')

    def run_test(self, backend):
        env = os.environ.copy()

        msaa = '-msaa' in backend
        if msaa:
            backend = backend.replace('-msaa', '')
            env['CAIRO_GL_COMPOSITOR'] = 'msaa'
        else:
            env['CAIRO_GL_COMPOSITOR'] = 'foo'

        env['LD_PRELOAD'] = '{0} {1} {2}'.format(
            os.path.join(CairoRepository.repository_path, 'src', '.libs', 'libcairo.so.2'),
            os.path.join(CairoRepository.repository_path, 'util', 'cairo-script', '.libs', 'libcairo-script-interpreter.so.2'),
            os.getenv('LD_PRELOAD', ''))

        process = subprocess.Popen([self.harness_path, self.test_path], stdout=subprocess.PIPE, env=env)
        (stdout, stderr) = process.communicate()
        process.wait()
        return self.parse_perf_tool_output(str(stdout, encoding='utf8'))

    @staticmethod
    def parse_perf_tool_output(output):
        return [float(x) for x in output.split(',')]


class HTMLReport(object):
    def __init__(self, output_path):
        self.output_path = output_path

    def generate(self):
        tests = get_tests_from_config()
        for test in tests:
            self.write_results_javascript(test)

        html_file = os.path.join(self.output_path, 'index.html')
        print('Writing {0}'.format(html_file))
        template = Template(open(TEMPLATE_PATH).read())
        with open(html_file, 'w') as output:
            output.write(template.substitute(
                scripts="\n".join([self.scripts_include_for_test(test) for test in tests]),
                graphs="\n".join([self.graph_code_for_test(test) for test in tests])))

    @staticmethod
    def write_results_javascript(test):
        js_path = os.path.join(REPORT_PATH, test.filename() + '.js')
        print('Writing {0}'.format(js_path))
        with open(js_path, 'w') as output:
            output.write('var {0} = {1};'.format(
                test.filename(),
                json.dumps(test.get_report(), indent=1)))

    @staticmethod
    def scripts_include_for_test(test):
        return '        <script type="text/javascript" src="reports/{0}.js"></script>'.format(test.filename())

    @staticmethod
    def graph_code_for_test(test):
        return '            graphFromTrace({0});'.format(test.filename())

def get_tests_from_config(test=None, commit=None, backends=None, machine=None):
    tests = []

    if backends:
        backends = backends.split(",")

    for test_config in Config.tests():
        if test and test != test_config.name:
            continue

        test_commits = commit if commit else test_config['CommitRange']
        test_backends = backends if backends else test_config['Backends'].split(',')
        if 'TracePath' in test_config:
            tests.append(PerfTraceTest(backends=test_backends,
                                       trace=test_config['TracePath'],
                                       commit_range=test_commits))
        elif 'MicroTest' in test_config:
            tests.append(CanvasMicroTest(backends=test_backends,
                                         test=test_config['MicroTest'],
                                         commit_range=test_commits))
    return tests

def sample(args):
    for test in get_tests_from_config(test=args.test, commit=args.commit, backends=args.backends):
        test.run_tests()

def resample(args):
    for test in get_tests_from_config(test=args.test, commit=args.commit, backends=args.backends):
        test.run_tests(resample=resample)

def mock(args):
    for test in get_tests_from_config(test=args.test, commit=args.commit, backends=args.backends):
        test.run_tests(mock=mock)

def make_html(args):
    report = HTMLReport(SCRIPT_PATH)
    report.generate()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers()

    flexible_command = argparse.ArgumentParser(add_help=False)
    flexible_command.add_argument('test', metavar='TEST', type=str,
                                  help='a test to resample', default=None)
    flexible_command.add_argument('--backends', '-b', type=str, default=None, dest='backends',
                                  help='backends to resample')
    flexible_command.add_argument('--commit', '-c', type=str, default=None, dest='commit',
                                  help='commit range or commit')

    parser_sample = subparsers.add_parser('sample', parents=[flexible_command])
    parser_sample.set_defaults(func=sample)

    parser_resample = subparsers.add_parser('resample', parents=[flexible_command])
    parser_resample.set_defaults(func=resample)

    parser_mock = subparsers.add_parser('mock', parents=[flexible_command])
    parser_mock.set_defaults(func=mock)

    parser_make_html = subparsers.add_parser('make-html')
    parser_make_html.set_defaults(func=make_html)

    args = parser.parse_args()
    args.func(args)
