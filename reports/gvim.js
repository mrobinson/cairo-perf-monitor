var gvim = {
 "test": "gvim", 
 "backends": [
  "image", 
  "xlib"
 ], 
 "commitRange": "HEAD~10..", 
 "results": [
  {
   "commit": "ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c", 
   "message": "commit ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Mar 20 15:10:34 2013 +0000\n\n    gl: Fix typo in gles2 shader cache lookup\n    \n    When comparing shader cache entries, it's important that we actually\n    compare the variable type hash.\n", 
   "image": {
    "samples": [
     1355341825.0, 
     1324642977.0, 
     1327807728.0, 
     1346617080.0, 
     1341400360.0, 
     1340933369.0, 
     1327947520.0, 
     1350290086.0, 
     1357178613.0, 
     1345530331.0, 
     1353263276.0, 
     1341446969.0, 
     1346484411.0, 
     1340517686.0, 
     1348302010.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1887446283.0, 
     1140516688.0, 
     1134889246.0, 
     1163596365.0, 
     1143347339.0, 
     1153773862.0, 
     1141633310.0, 
     1156091793.0, 
     1151743956.0, 
     1156102284.0, 
     1151278092.0, 
     1142981967.0, 
     1153404066.0, 
     1143537815.0, 
     1157228632.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b", 
   "message": "commit 13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Thu Mar 21 16:48:43 2013 -0400\n\n    [ft] I meant fabs(), not abs()\n", 
   "image": {
    "samples": [
     1364807900.0, 
     1338276974.0, 
     1340308953.0, 
     1342267757.0, 
     1345472309.0, 
     1354926915.0, 
     1346510229.0, 
     1347710497.0, 
     1359578930.0, 
     1362320183.0, 
     1357480519.0, 
     1360047966.0, 
     1387568671.0, 
     1379499461.0, 
     1357880235.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1872324743.0, 
     1158845830.0, 
     1153257765.0, 
     1157125229.0, 
     1155886856.0, 
     1157300940.0, 
     1173058378.0, 
     1159886557.0, 
     1166706801.0, 
     1173743742.0, 
     1159497329.0, 
     1171209902.0, 
     1171810523.0, 
     1168103352.0, 
     1191689800.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "caf50c07e225ee3a3e149234601e7305b1437736", 
   "message": "commit caf50c07e225ee3a3e149234601e7305b1437736\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 13:58:04 2013 +0100\n\n    test: Fix handling of dots in CAIRO_TEST_TARGET\n    \n    Before this, the following happened:\n    \n      $ CAIRO_TEST_TARGET=image,xcb-render-0.0 make test\n      Cannot find target 'image'.\n      Known targets: image, [...]\n    \n    The reason for this is that _cairo_boilerplate_target_matches_name() doesn't get\n    a null-terminated string, but instead has a pointer to the end of the string.\n    However, strpbrk() expects a null-terminated argument and thus could return a\n    result which points past the end of the input.\n    \n    This commit fixes exactly this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1380901773.0, 
     1366372338.0, 
     1372568550.0, 
     1370173481.0, 
     1375852963.0, 
     1380396878.0, 
     1374940212.0, 
     1384396904.0, 
     1377345123.0, 
     1373901228.0, 
     1369270285.0, 
     1376677956.0, 
     1379352510.0, 
     1379365748.0, 
     1387601272.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1759887986.0, 
     1147192113.0, 
     1181688285.0, 
     1158633543.0, 
     1151413448.0, 
     1152925662.0, 
     1149615569.0, 
     1175729339.0, 
     1169477662.0, 
     1161042498.0, 
     1148766220.0, 
     1175845076.0, 
     1183464202.0, 
     1181985151.0, 
     1165366668.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "b7c06fff1f597ba74fa6618766ec297d3a4bf880", 
   "message": "commit b7c06fff1f597ba74fa6618766ec297d3a4bf880\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:04:44 2013 +0100\n\n    boilerplate: rename xcb-render-0.0 to xcb-render-0_0\n    \n    The test suite uses dots to separate the backend name from the content type.\n    Thus, the backend name must not contain any dots.\n    \n    The xlib backend already calls its RENDER 0.0 target xlib-render-0_0 for this\n    reason. This commit makes the xcb backend match this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1394305757.0, 
     1388008717.0, 
     1399577887.0, 
     1386482860.0, 
     1406846398.0, 
     1391123339.0, 
     1410079128.0, 
     1425885723.0, 
     1413390710.0, 
     1409509697.0, 
     1412835804.0, 
     1390422674.0, 
     1401536010.0, 
     1391819797.0, 
     1406233338.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1894861236.0, 
     1216754684.0, 
     1194110359.0, 
     1221350506.0, 
     1195826679.0, 
     1195493072.0, 
     1213248822.0, 
     1244337157.0, 
     1217758348.0, 
     1194001468.0, 
     1208219330.0, 
     1222602055.0, 
     1202273249.0, 
     1192358617.0, 
     1234328367.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437", 
   "message": "commit 41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:14:29 2013 +0100\n\n    Fix \"make check\" standalone header check\n    \n    This fixes the following error:\n    \n    ./cairo-fixed-private.h: In function \u2018_slow_segment_intersection\u2019:\n    ./cairo-fixed-private.h:374:9: error: \u2018FALSE\u2019 undeclared (first use in this function)\n    ./cairo-fixed-private.h:374:9: note: each undeclared identifier is reported only once for each function it appears in\n    ./cairo-fixed-private.h:386:12: error: \u2018TRUE\u2019 undeclared (first use in this function)\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1421603171.0, 
     1433964124.0, 
     1403810818.0, 
     1407517435.0, 
     1388972619.0, 
     1422261763.0, 
     1414957385.0, 
     1392609077.0, 
     1411527253.0, 
     1466248026.0, 
     1453995763.0, 
     1470120328.0, 
     1458998812.0, 
     1467740668.0, 
     1461898063.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1906182155.0, 
     1289308794.0, 
     1300830737.0, 
     1304149139.0, 
     1276693544.0, 
     1364092174.0, 
     1704170893.0, 
     1241517828.0, 
     1231682191.0, 
     1255098423.0, 
     1233792842.0, 
     1214699320.0, 
     1248176885.0, 
     1208038234.0, 
     1214463342.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be5eabb66a475720020211a6d37bfeb75fc3242c", 
   "message": "commit be5eabb66a475720020211a6d37bfeb75fc3242c\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 18:19:00 2013 +0100\n\n    xcb: Clear temporary replay image in recording playback\n    \n    This gets rid of random noise that we got from the X11 server due to\n    uninitialized memory.\n    \n    Fixes: pdf-surface-source, ps-surface-source, svg-surface-source\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1374768472.0, 
     1347825842.0, 
     1369051787.0, 
     1370571607.0, 
     1379215704.0, 
     1356205715.0, 
     1360850145.0, 
     1362392152.0, 
     1363725301.0, 
     1362372979.0, 
     1346134011.0, 
     1343813064.0, 
     1359972867.0, 
     1359983748.0, 
     1344840450.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1556263434.0, 
     1151902626.0, 
     1154240771.0, 
     1151413582.0, 
     1154941345.0, 
     1166849819.0, 
     1157960688.0, 
     1176347671.0, 
     1186464779.0, 
     1158231971.0, 
     1173700849.0, 
     1178637617.0, 
     1166766453.0, 
     1168659936.0, 
     1157237781.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "59ccc3d72e839bd897111322765bb13696a97ef5", 
   "message": "commit 59ccc3d72e839bd897111322765bb13696a97ef5\nAuthor: Nicola Fontana <ntd@entidi.it>\nDate:   Fri Mar 1 14:16:45 2013 +0100\n\n    gobject: Add wrapper around cairo_matrix_t\n    \n    Reviewed-By: Benjamin Otte <otte@redhat.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1353275060.0, 
     1347658290.0, 
     1356724689.0, 
     1370988525.0, 
     1352739211.0, 
     1342877946.0, 
     1342983141.0, 
     1356970654.0, 
     1338893282.0, 
     1348240265.0, 
     1359492070.0, 
     1348927515.0, 
     1364233588.0, 
     1361258484.0, 
     1353103876.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1778476970.0, 
     1129832452.0, 
     1144330076.0, 
     1137061980.0, 
     1138333606.0, 
     1132475483.0, 
     1122956272.0, 
     1142154102.0, 
     1136654352.0, 
     1142565159.0, 
     1146692366.0, 
     1148887124.0, 
     1154385762.0, 
     1160877195.0, 
     1155504998.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "9e0748e223cfb8c5557c73f3ab5068ec1323e7c2", 
   "message": "commit 9e0748e223cfb8c5557c73f3ab5068ec1323e7c2\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Wed Mar 27 08:08:32 2013 +1030\n\n    pdf: fix typo in bbox check\n    \n    http://lists.cairographics.org/archives/cairo/2013-March/024186.html\n", 
   "image": {
    "samples": [
     1358748811.0, 
     1330864648.0, 
     1332419011.0, 
     1334693958.0, 
     1333151429.0, 
     1329146985.0, 
     1333838364.0, 
     1332315330.0, 
     1341700804.0, 
     1338765720.0, 
     1355793260.0, 
     1338748358.0, 
     1335021581.0, 
     1347228506.0, 
     1338351220.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1794979191.0, 
     1158973874.0, 
     1208656688.0, 
     1152120076.0, 
     1129373602.0, 
     1119937245.0, 
     1152092652.0, 
     1150120521.0, 
     1156871593.0, 
     1167493162.0, 
     1159997666.0, 
     1147326247.0, 
     1185601016.0, 
     1164430482.0, 
     1195820543.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fdec6b37596d8b064ff082326d7189daa8208052", 
   "message": "commit fdec6b37596d8b064ff082326d7189daa8208052\nAuthor: Michael Hutchinson <m.j.hutchinson@gmail.com>\nDate:   Fri Mar 29 02:37:33 2013 +0100\n\n    quartz: Don't release memory we don't own\n    \n    This was causing crashes due to double frees.\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=62885\n    \n    Signed-off-by: Benjamin Otte <otte@redhat.com>\n", 
   "image": {
    "samples": [
     1382893601.0, 
     1433930740.0, 
     1445431928.0, 
     1404079446.0, 
     1423029616.0, 
     1414476292.0, 
     1427791153.0, 
     1419088868.0, 
     1477592017.0, 
     1396695152.0, 
     1394735740.0, 
     1344046607.0, 
     1347455791.0, 
     1357471697.0, 
     1370889729.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1187082109.0, 
     1192601422.0, 
     1170552749.0, 
     1196296469.0, 
     1192724041.0, 
     1157712366.0, 
     1188553403.0, 
     1186927074.0, 
     1177125459.0, 
     1168917632.0, 
     1169487028.0, 
     1209787393.0, 
     1229245817.0, 
     1171793162.0, 
     1179093615.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d35e5e2bc75ddf2046c91dc0b3f40d406bab8850", 
   "message": "commit d35e5e2bc75ddf2046c91dc0b3f40d406bab8850\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 29 11:09:48 2013 -0700\n\n    boilerplate/gl: Disable thread awareness\n    \n    This dramatically speeds up testing on NVidia and actually makes it\n    possible to run traces within a reasonable amount of time.\n    \n    cairo-perf-trace results for:\n    NVIDIA Corporation GeForce GTS 250/PCIe/SSE2 3.3.0 NVIDIA 310.14\n    \n    Before:\n    test              min(s)  median(s) stddev. count\n    gvim              30.924  31.251    0.72%   5/6\n    firefox-fishbowl  168.751 201.017   12.46%  8/8\n    (exited early)\n    \n    After:\n    test              min(s)  median(s) stddev. count\n    gvim              1.294   1.325     1.79%   6/6\n    firefox-fishbowl  18.540  19.104    1.54%   6/6\n", 
   "image": {
    "samples": [
     1352938441.0, 
     1337596602.0, 
     1338803420.0, 
     1349174229.0, 
     1352721373.0, 
     1348367100.0, 
     1343628705.0, 
     1344746979.0, 
     1356725807.0, 
     1355174621.0, 
     1351987403.0, 
     1346228925.0, 
     1351757505.0, 
     1347071006.0, 
     1349828758.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1761547749.0, 
     1150562506.0, 
     1142744543.0, 
     1130868969.0, 
     1147044799.0, 
     1129759183.0, 
     1146945987.0, 
     1142513290.0, 
     1137963223.0, 
     1146379097.0, 
     1153850794.0, 
     1142058018.0, 
     1139039971.0, 
     1141200779.0, 
     1144625683.0
    ], 
    "normalization": 1000000.0
   }
  }
 ]
};