#!/usr/bin/env python3

import os
import os.path
import sys

# we need to do this before booting up GIR. This is motivated
# by Ubuntu inserting the overlay scrollbar module which isn't
# available in JHBuild environments.
os.putenv('GTK_MODULES', '')

from gi.repository import GLib
from gi.repository import Gtk
from gi.repository import WebKit2
from urllib.parse import urlparse


def location_changed(*args):
    uri = web_view.get_uri()
    if not '#' in uri:
        return

    print(urlparse(uri).fragment)
    sys.exit(0)

def inject_javascript(web_view, load_event):
    if load_event != WebKit2.LoadEvent.FINISHED:
        return
    web_view.run_javascript(open(sys.argv[1]).read(), None, None, None)
    web_view.run_javascript('runTests();', None, None, None)

if __name__ == '__main__':
    Gtk.init(sys.argv)

    window = Gtk.Window(Gtk.WindowType.TOPLEVEL)
    window.connect('destroy', Gtk.main_quit)
    web_view = WebKit2.WebView()
    window.add(web_view)

    web_view.connect('load-changed', inject_javascript)
    web_view.connect('notify::uri', location_changed)

    script_path = os.path.abspath(os.path.dirname(os.path.realpath(__file__)))
    web_view.load_uri(GLib.filename_to_uri(os.path.join(script_path, "harness.html"), None))

    window.resize(485, 485);
    window.show_all()

    Gtk.main()
