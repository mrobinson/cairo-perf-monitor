#!/usr/bin/env python3

import sys

from gi.repository import Gtk
from gi.repository import WebKit2


Gtk.init(sys.argv)

window = Gtk.Window(Gtk.WindowType.TOPLEVEL)
window.connect('destroy', Gtk.main_quit)

web_view = WebKit2.WebView()
window.add(web_view)

web_view.load_uri(sys.argv[1])

def inject_javascript(web_view, load_event):
    if load_event != WebKit2.LoadEvent.FINISHED:
        return
    web_view.run_javascript(open(sys.argv[2]).read(), None, None, None)
    web_view.run_javascript("runTests();", None, None, None)

web_view.connect('load-changed', inject_javascript)

window.resize(800,600);
window.show_all()
Gtk.main()
