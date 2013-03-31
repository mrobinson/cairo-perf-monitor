var firefox_fishbowl = {
 "test": "firefox-fishbowl", 
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
     103547892746.0, 
     103336808846.0, 
     103260478206.0, 
     103293799846.0, 
     103358176095.0, 
     103479355508.0, 
     103773323842.0, 
     105031233567.0, 
     103509812933.0, 
     103548308805.0, 
     103258120849.0, 
     103289754062.0, 
     103333812881.0, 
     103319401077.0, 
     103296808869.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     30892650694.0, 
     29721370405.0, 
     29137657849.0, 
     30053391773.0, 
     29918437572.0, 
     29598531260.0, 
     29289938964.0, 
     29756140978.0, 
     29734266080.0, 
     29455737491.0, 
     30932305974.0, 
     28716113424.0, 
     28969135036.0, 
     28411838362.0, 
     31464361264.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b", 
   "message": "commit 13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Thu Mar 21 16:48:43 2013 -0400\n\n    [ft] I meant fabs(), not abs()\n", 
   "image": {
    "samples": [
     104635765344.0, 
     107171067079.0, 
     107077088970.0, 
     106974301330.0, 
     107070053269.0, 
     106238193918.0, 
     103838525278.0, 
     103245753295.0, 
     103127566096.0, 
     103185780201.0, 
     103367081156.0, 
     103404545782.0, 
     103210072512.0, 
     103104968859.0, 
     103376805261.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     30351804811.0, 
     29907430371.0, 
     29418085524.0, 
     28630662482.0, 
     27334989627.0, 
     27509733635.0, 
     27474801373.0, 
     27841352179.0, 
     27368985467.0, 
     27521092066.0, 
     27568221929.0, 
     28840896650.0, 
     27756214891.0, 
     30937878771.0, 
     31513948160.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "caf50c07e225ee3a3e149234601e7305b1437736", 
   "message": "commit caf50c07e225ee3a3e149234601e7305b1437736\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 13:58:04 2013 +0100\n\n    test: Fix handling of dots in CAIRO_TEST_TARGET\n    \n    Before this, the following happened:\n    \n      $ CAIRO_TEST_TARGET=image,xcb-render-0.0 make test\n      Cannot find target 'image'.\n      Known targets: image, [...]\n    \n    The reason for this is that _cairo_boilerplate_target_matches_name() doesn't get\n    a null-terminated string, but instead has a pointer to the end of the string.\n    However, strpbrk() expects a null-terminated argument and thus could return a\n    result which points past the end of the input.\n    \n    This commit fixes exactly this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     103292426261.0, 
     103367366708.0, 
     103401646031.0, 
     103334721964.0, 
     103350388452.0, 
     103294753832.0, 
     105807886842.0, 
     106700780115.0, 
     103474573814.0, 
     103154365986.0, 
     103318155728.0, 
     103066281106.0, 
     103272443107.0, 
     105290679028.0, 
     107351150149.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     28726074814.0, 
     27721052066.0, 
     27270518828.0, 
     30629202511.0, 
     28294237629.0, 
     28636429196.0, 
     28824557075.0, 
     27436993678.0, 
     27777990567.0, 
     27929965799.0, 
     31442143003.0, 
     31540926669.0, 
     31824712137.0, 
     29517153624.0, 
     27602467427.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "b7c06fff1f597ba74fa6618766ec297d3a4bf880", 
   "message": "commit b7c06fff1f597ba74fa6618766ec297d3a4bf880\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:04:44 2013 +0100\n\n    boilerplate: rename xcb-render-0.0 to xcb-render-0_0\n    \n    The test suite uses dots to separate the backend name from the content type.\n    Thus, the backend name must not contain any dots.\n    \n    The xlib backend already calls its RENDER 0.0 target xlib-render-0_0 for this\n    reason. This commit makes the xcb backend match this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     103154474988.0, 
     103127642839.0, 
     103305622154.0, 
     103079854175.0, 
     103045002383.0, 
     103133125985.0, 
     103126555570.0, 
     102984529582.0, 
     103091523225.0, 
     103313439281.0, 
     103356732244.0, 
     103174769310.0, 
     103101813095.0, 
     104349558761.0, 
     104604995158.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     33561973917.0, 
     31974264680.0, 
     32055457646.0, 
     31316783372.0, 
     32497842243.0, 
     32161945644.0, 
     31904061588.0, 
     32242164525.0, 
     29815841577.0, 
     29907681451.0, 
     29713214324.0, 
     29208319425.0, 
     29759258702.0, 
     28435051938.0, 
     29174032086.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437", 
   "message": "commit 41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:14:29 2013 +0100\n\n    Fix \"make check\" standalone header check\n    \n    This fixes the following error:\n    \n    ./cairo-fixed-private.h: In function \u2018_slow_segment_intersection\u2019:\n    ./cairo-fixed-private.h:374:9: error: \u2018FALSE\u2019 undeclared (first use in this function)\n    ./cairo-fixed-private.h:374:9: note: each undeclared identifier is reported only once for each function it appears in\n    ./cairo-fixed-private.h:386:12: error: \u2018TRUE\u2019 undeclared (first use in this function)\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     103280130171.0, 
     103343154586.0, 
     103272020057.0, 
     102951358626.0, 
     103288941005.0, 
     103214930509.0, 
     103788579278.0, 
     103421355576.0, 
     103274539722.0, 
     103293630140.0, 
     103232388914.0, 
     103205875169.0, 
     103439712900.0, 
     103212649696.0, 
     103483744217.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     31521864364.0, 
     28872817581.0, 
     29562163121.0, 
     29175074414.0, 
     29937240185.0, 
     29362435960.0, 
     29615535308.0, 
     29474493115.0, 
     29457926629.0, 
     29186298736.0, 
     29822060295.0, 
     29554511632.0, 
     29470889498.0, 
     29525782763.0, 
     29472166927.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be5eabb66a475720020211a6d37bfeb75fc3242c", 
   "message": "commit be5eabb66a475720020211a6d37bfeb75fc3242c\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 18:19:00 2013 +0100\n\n    xcb: Clear temporary replay image in recording playback\n    \n    This gets rid of random noise that we got from the X11 server due to\n    uninitialized memory.\n    \n    Fixes: pdf-surface-source, ps-surface-source, svg-surface-source\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     103297648128.0, 
     103125124458.0, 
     103218367862.0, 
     103453234971.0, 
     103254259068.0, 
     103258288524.0, 
     103292931050.0, 
     103269007532.0, 
     103118523100.0, 
     103118183038.0, 
     103200868899.0, 
     103228030824.0, 
     103364882115.0, 
     103340627593.0, 
     103262044028.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     30752362944.0, 
     29733655609.0, 
     29439912001.0, 
     29240966582.0, 
     28726139732.0, 
     29470197487.0, 
     28913433005.0, 
     29008294246.0, 
     29335497400.0, 
     29301387864.0, 
     29206580937.0, 
     27761660107.0, 
     27566604292.0, 
     27581888595.0, 
     27973471486.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "59ccc3d72e839bd897111322765bb13696a97ef5", 
   "message": "commit 59ccc3d72e839bd897111322765bb13696a97ef5\nAuthor: Nicola Fontana <ntd@entidi.it>\nDate:   Fri Mar 1 14:16:45 2013 +0100\n\n    gobject: Add wrapper around cairo_matrix_t\n    \n    Reviewed-By: Benjamin Otte <otte@redhat.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     106813372210.0, 
     106820209109.0, 
     106983591586.0, 
     105546722607.0, 
     105547115707.0, 
     105263884305.0, 
     105235365041.0, 
     104980146843.0, 
     103346568898.0, 
     103160622795.0, 
     103271809921.0, 
     103215236486.0, 
     103317569920.0, 
     103255345388.0, 
     103421927345.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     30668044687.0, 
     29259416306.0, 
     29125335445.0, 
     29192779922.0, 
     29483037967.0, 
     29181588598.0, 
     29160992342.0, 
     29325153112.0, 
     29238627133.0, 
     29620265919.0, 
     28843408545.0, 
     29266033053.0, 
     28869695736.0, 
     28913021117.0, 
     29028259978.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "9e0748e223cfb8c5557c73f3ab5068ec1323e7c2", 
   "message": "commit 9e0748e223cfb8c5557c73f3ab5068ec1323e7c2\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Wed Mar 27 08:08:32 2013 +1030\n\n    pdf: fix typo in bbox check\n    \n    http://lists.cairographics.org/archives/cairo/2013-March/024186.html\n", 
   "image": {
    "samples": [
     102807377043.0, 
     102773360540.0, 
     102966187816.0, 
     102924891339.0, 
     108114078894.0, 
     110095931466.0, 
     106558735893.0, 
     105668507576.0, 
     106265000824.0, 
     103916723719.0, 
     103934467518.0, 
     106049084716.0, 
     108608040167.0, 
     105506322350.0, 
     103956431644.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     27691174429.0, 
     26472621755.0, 
     26487521690.0, 
     26731503094.0, 
     28173997249.0, 
     27782651395.0, 
     26519490849.0, 
     26372414242.0, 
     26672364885.0, 
     26872830506.0, 
     28343658371.0, 
     26761432672.0, 
     26740655762.0, 
     26857102523.0, 
     26848999866.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fdec6b37596d8b064ff082326d7189daa8208052", 
   "message": "commit fdec6b37596d8b064ff082326d7189daa8208052\nAuthor: Michael Hutchinson <m.j.hutchinson@gmail.com>\nDate:   Fri Mar 29 02:37:33 2013 +0100\n\n    quartz: Don't release memory we don't own\n    \n    This was causing crashes due to double frees.\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=62885\n    \n    Signed-off-by: Benjamin Otte <otte@redhat.com>\n", 
   "image": {
    "samples": [
     102836342214.0, 
     102793576364.0, 
     102741326285.0, 
     102762073685.0, 
     102780198683.0, 
     102798735123.0, 
     102834807925.0, 
     102887196306.0, 
     102792649300.0, 
     103037383106.0, 
     102734509032.0, 
     102706820182.0, 
     102800610834.0, 
     102655692961.0, 
     102698329657.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     29203984865.0, 
     28706174494.0, 
     28772921812.0, 
     28868216856.0, 
     27968163446.0, 
     28458638331.0, 
     28816663148.0, 
     28835416003.0, 
     28799187374.0, 
     28858722910.0, 
     28698689363.0, 
     28402594372.0, 
     29101123589.0, 
     28612849722.0, 
     29112635336.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d35e5e2bc75ddf2046c91dc0b3f40d406bab8850", 
   "message": "commit d35e5e2bc75ddf2046c91dc0b3f40d406bab8850\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 29 11:09:48 2013 -0700\n\n    boilerplate/gl: Disable thread awareness\n    \n    This dramatically speeds up testing on NVidia and actually makes it\n    possible to run traces within a reasonable amount of time.\n    \n    cairo-perf-trace results for:\n    NVIDIA Corporation GeForce GTS 250/PCIe/SSE2 3.3.0 NVIDIA 310.14\n    \n    Before:\n    test              min(s)  median(s) stddev. count\n    gvim              30.924  31.251    0.72%   5/6\n    firefox-fishbowl  168.751 201.017   12.46%  8/8\n    (exited early)\n    \n    After:\n    test              min(s)  median(s) stddev. count\n    gvim              1.294   1.325     1.79%   6/6\n    firefox-fishbowl  18.540  19.104    1.54%   6/6\n", 
   "image": {
    "samples": [
     102952288341.0, 
     102704630011.0, 
     102744539002.0, 
     102814363940.0, 
     102733342757.0, 
     102958653029.0, 
     102706610311.0, 
     102764021420.0, 
     102827587029.0, 
     102776773942.0, 
     102894320262.0, 
     103073985354.0, 
     102911276104.0, 
     102854597427.0, 
     102908635071.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     29183892596.0, 
     28539699763.0, 
     28963336368.0, 
     28594544856.0, 
     29074901987.0, 
     28711024089.0, 
     29561721834.0, 
     28842369874.0, 
     28784264483.0, 
     28886915266.0, 
     28796682502.0, 
     28734458275.0, 
     28755330418.0, 
     28905383677.0, 
     29037335131.0
    ], 
    "normalization": 1000000.0
   }
  }
 ]
};