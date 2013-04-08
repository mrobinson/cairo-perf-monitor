var firefox_talos_gfx = {
 "test": "firefox-talos-gfx", 
 "results": [
  {
   "commit": "dd20c1f4d6419238bbb37fb93a48986f83c6e6c2", 
   "message": "commit dd20c1f4d6419238bbb37fb93a48986f83c6e6c2\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:38:09 2013 +0000\n\n    xlib: map-to-image requires an extents\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6749803932.0, 
     6119466022.0, 
     6049537868.0, 
     6105189404.0, 
     6124465671.0, 
     6104274856.0, 
     6116529804.0, 
     6073784864.0, 
     6083547211.0, 
     6083741320.0, 
     6110124213.0, 
     6053061112.0, 
     6092016062.0, 
     6104892723.0, 
     6089009231.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6024504676.0, 
     5993801046.0, 
     5991526408.0, 
     5996092753.0, 
     6015152135.0, 
     6027892045.0, 
     6023468165.0, 
     6023251253.0, 
     6004801017.0, 
     6004502117.0, 
     6008609879.0, 
     5988639748.0, 
     5993456645.0, 
     5991159753.0, 
     6001191620.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "17418371b6755ef22b6d0c5787f71de3005e0730", 
   "message": "commit 17418371b6755ef22b6d0c5787f71de3005e0730\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 15:06:28 2013 +0000\n\n    xcb: _cairo_scaled_font_reset_cache does it own locking\n    \n    So we can drop ours.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6543995270.0, 
     6050292272.0, 
     6060464421.0, 
     6043222584.0, 
     6123298853.0, 
     6092590606.0, 
     6095691142.0, 
     6106464124.0, 
     6060604571.0, 
     6096990611.0, 
     6090598181.0, 
     6090274981.0, 
     6053816896.0, 
     6102776032.0, 
     6098574264.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5982533028.0, 
     5958503778.0, 
     5954524175.0, 
     5944961584.0, 
     5970390841.0, 
     5967810402.0, 
     5982086710.0, 
     6000507590.0, 
     5990791526.0, 
     5964755823.0, 
     5955140402.0, 
     5955034780.0, 
     5984622406.0, 
     5954210010.0, 
     5965449683.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d524697ede85d36e4f88fa44d6a8b884685d804b", 
   "message": "commit d524697ede85d36e4f88fa44d6a8b884685d804b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 8 17:08:52 2013 -0800\n\n    gl/msaa: No need to set the clip when masking\n    \n    After 5e9083f882859201c5df18fc870577a224f88cbb there's no need to set a\n    clip on the cairo_gl_composite_t when masking. Clips are converted to\n    traps and rendered directly when masking now.\n", 
   "nvidia-xlib": {
    "samples": [
     6681798514.0, 
     6123310619.0, 
     6126733117.0, 
     6094460887.0, 
     6095368841.0, 
     6115871527.0, 
     6071396772.0, 
     6115877710.0, 
     6113876940.0, 
     6125754741.0, 
     6088893747.0, 
     6087734938.0, 
     6118417336.0, 
     6090890749.0, 
     6068942578.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6016639882.0, 
     5971051866.0, 
     5985566817.0, 
     5996551417.0, 
     6006851334.0, 
     5991452099.0, 
     5981752505.0, 
     5987997761.0, 
     5987718932.0, 
     5986521305.0, 
     5983865201.0, 
     6003007018.0, 
     5994067083.0, 
     5981287318.0, 
     5995983332.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1bcd59ef4c9dceaefa51ec6db1f5240d75940724", 
   "message": "commit 1bcd59ef4c9dceaefa51ec6db1f5240d75940724\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Jan 9 14:16:59 2013 -0800\n\n    gl/msaa: Rely on the stencil buffer to cache the clip\n    \n    When using a texture surface the depth/stencil buffer is private to\n    cairo so we can rely on the fact that any previously painted clip is\n    still valid.\n    \n    We also only scissor when there's a previously painted clip on the\n    stencil buffer, otherwise we disable the scissor test. This fixes a few\n    test cases.\n", 
   "nvidia-xlib": {
    "samples": [
     7156487035.0, 
     6085953559.0, 
     6082624229.0, 
     6042383492.0, 
     6125323853.0, 
     6077301180.0, 
     6070172275.0, 
     6087712071.0, 
     6130705526.0, 
     6040093763.0, 
     6082525082.0, 
     6102055890.0, 
     6095774850.0, 
     6095394995.0, 
     6070183054.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6042623719.0, 
     5984044368.0, 
     6008661017.0, 
     5976415292.0, 
     5989690251.0, 
     6010993039.0, 
     5977501539.0, 
     6011275438.0, 
     5982852946.0, 
     5981916762.0, 
     6013404604.0, 
     5981676770.0, 
     5993642030.0, 
     6013116696.0, 
     5992421110.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "503b6b9e2ea65805a77d527c00cf242ec86d479b", 
   "message": "commit 503b6b9e2ea65805a77d527c00cf242ec86d479b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Jan 11 13:10:56 2013 +0000\n\n    xlib: Only fallback through the mask intermediate if we can composite the mask\n    \n    Before rendering into the mask, we should first check whether the\n    subsequent call to composite the mask will trigger a fallback. In that\n    case, we should fallback earlier and do the operation in place.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7061372830.0, 
     6081068918.0, 
     6056866950.0, 
     6080281832.0, 
     6109345038.0, 
     6081411534.0, 
     6092028631.0, 
     6095835515.0, 
     6108734608.0, 
     6081720759.0, 
     6077452070.0, 
     6108574769.0, 
     6104684768.0, 
     6121312488.0, 
     6106387502.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6038945146.0, 
     5985067063.0, 
     6008128165.0, 
     5999800104.0, 
     6019405270.0, 
     5999412296.0, 
     5982475371.0, 
     6003963869.0, 
     5967074694.0, 
     5990345140.0, 
     6000791660.0, 
     5988519022.0, 
     6021194243.0, 
     5998170526.0, 
     6008917308.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7012334ebb424b619312e1fa397cc3b8a3ffd770", 
   "message": "commit 7012334ebb424b619312e1fa397cc3b8a3ffd770\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 17:20:24 2013 +0000\n\n    xlib: Handle lack of XRenderFillRectangles\n    \n    Remember to check for a supported render version before making a\n    FillRectangle request, and fallback to the core protocol where possible\n    instead.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6641773740.0, 
     6067749018.0, 
     6060853210.0, 
     6065694173.0, 
     6103736663.0, 
     6120822897.0, 
     6118531632.0, 
     6116600648.0, 
     6114219901.0, 
     6114527295.0, 
     6134391337.0, 
     6099260144.0, 
     6068585576.0, 
     6066951777.0, 
     6102208094.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6035419980.0, 
     6024258070.0, 
     6001860536.0, 
     6035652721.0, 
     6028604398.0, 
     6001869405.0, 
     6045456556.0, 
     6018191888.0, 
     6049829578.0, 
     6006022490.0, 
     6041623253.0, 
     6019158668.0, 
     6031864188.0, 
     6041833863.0, 
     6017786046.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885", 
   "message": "commit 14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:11:31 2013 +0000\n\n    compositor: Convert image surface into backend source\n    \n    Before passing a surface to the backend composite functions, they expect\n    them to be a native source. The copy'n'paste code for the mask\n    compositor forgot to perform the conversion upon the clip surfaces,\n    which originally were native to the backend and are now images.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6798635658.0, 
     6099880100.0, 
     6102220889.0, 
     6103101409.0, 
     6093619306.0, 
     6072375138.0, 
     6064935545.0, 
     6079638175.0, 
     6108808161.0, 
     6084159470.0, 
     6107735694.0, 
     6118708464.0, 
     6105467036.0, 
     6131976999.0, 
     6098172718.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5998572998.0, 
     5989522956.0, 
     5959591671.0, 
     5967251327.0, 
     6008283114.0, 
     5983722423.0, 
     5987970657.0, 
     5968166094.0, 
     5998502859.0, 
     5975362673.0, 
     5984423509.0, 
     5984042126.0, 
     5968676155.0, 
     5987988173.0, 
     5983674163.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fd34f420ec3ba02eb39f22f6551705ab23ebfc28", 
   "message": "commit fd34f420ec3ba02eb39f22f6551705ab23ebfc28\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:16:17 2013 +0000\n\n    compositor: Pass back the internal failure\n    \n    In order to pass back a CAIRO_INT_STATUS_UNSUPPORTED, we need to use the\n    internal error surface creation functions as they do not assert on\n    private error codes.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7044008315.0, 
     6059322347.0, 
     6109406787.0, 
     6086370692.0, 
     6070104035.0, 
     6109399990.0, 
     6072582351.0, 
     6069540521.0, 
     6051727905.0, 
     6100736556.0, 
     6104881568.0, 
     6063930569.0, 
     6088704052.0, 
     6093638519.0, 
     6098401592.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5995551354.0, 
     6014156101.0, 
     5980922979.0, 
     5953418961.0, 
     5985506540.0, 
     5979398169.0, 
     5976833968.0, 
     5978718822.0, 
     5985476228.0, 
     5999473050.0, 
     5973335884.0, 
     5983820213.0, 
     5984197703.0, 
     5964338241.0, 
     5978678299.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "6639c1231072d71d33eb0952bae5f95e7480cd0d", 
   "message": "commit 6639c1231072d71d33eb0952bae5f95e7480cd0d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 22:48:30 2013 +0000\n\n    xlib: Initialise Pixmap for proxy sources\n    \n    So that we do not try to tell X to free a garbage pixmap and promptly\n    kill us.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6757691463.0, 
     6055238450.0, 
     6091698279.0, 
     6071778676.0, 
     6113342350.0, 
     6091749224.0, 
     6084673726.0, 
     6086557201.0, 
     6106444097.0, 
     6101380386.0, 
     6098388777.0, 
     6075218443.0, 
     6120728609.0, 
     6097836055.0, 
     6105932669.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5999315194.0, 
     5962762466.0, 
     5955392242.0, 
     6008895667.0, 
     5969996958.0, 
     5980247302.0, 
     5946519640.0, 
     5956024703.0, 
     5968215205.0, 
     5974181180.0, 
     5992626153.0, 
     5949571342.0, 
     5984296838.0, 
     5964063410.0, 
     5957050241.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "768b81b78eabbebb1bb443355441cac567739035", 
   "message": "commit 768b81b78eabbebb1bb443355441cac567739035\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 14 03:27:11 2013 +0000\n\n    script: Set decompression length prior to calling decompressors\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59224\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6601947531.0, 
     6097855670.0, 
     6060845358.0, 
     6083292080.0, 
     6089021276.0, 
     6121243831.0, 
     6129591422.0, 
     6073670275.0, 
     6083168835.0, 
     6098473870.0, 
     6053224988.0, 
     6092384777.0, 
     6075903518.0, 
     6095623879.0, 
     6039170878.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6059737342.0, 
     5990947680.0, 
     6032495035.0, 
     6028078599.0, 
     5986502521.0, 
     5999249219.0, 
     6004818878.0, 
     6046994534.0, 
     6006994955.0, 
     5991020738.0, 
     6018102425.0, 
     6043401129.0, 
     6030161710.0, 
     6016407042.0, 
     6018839696.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d01a502710296c9b15755f445f6fdda289a2df0b", 
   "message": "commit d01a502710296c9b15755f445f6fdda289a2df0b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 12:07:33 2013 -0800\n\n    gl/msaa: Check for more extensions before using MSAA\n    \n    The MSAA compositor is implicitly relying on the existence of several\n    OpenGL extensions. This change makes those dependencies explicit.\n", 
   "nvidia-xlib": {
    "samples": [
     7011802574.0, 
     6108850860.0, 
     6070404006.0, 
     6093277974.0, 
     6077521913.0, 
     6098457671.0, 
     6091271616.0, 
     6093507603.0, 
     6104413978.0, 
     6080723189.0, 
     6078828965.0, 
     6082354485.0, 
     6079407990.0, 
     6053423057.0, 
     6086359224.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5987787349.0, 
     5954176239.0, 
     5987018033.0, 
     5944020980.0, 
     5941154894.0, 
     5957704252.0, 
     5964070439.0, 
     5915146209.0, 
     5978838984.0, 
     5972688696.0, 
     5943299874.0, 
     5980197273.0, 
     5957429881.0, 
     6006298514.0, 
     5968465747.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8", 
   "message": "commit 769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed May 2 21:54:55 2012 +0200\n\n    gl: Support for non-texture sources and masks\n    \n    If a GL surface is not a texture and is used as source or mask,\n    fall back to using an image surface as an intermediary.\n    \n    Fixes subsurface-image-repeat, subsurface-modify-child,\n    subsurface-modify-parent, subsurface-outside-target, subsurface-pad,\n    subsurface-reflect, subsurface-repeat, and subsurface-scale.\n", 
   "nvidia-xlib": {
    "samples": [
     6585017635.0, 
     6086458222.0, 
     6071590764.0, 
     6091116774.0, 
     6116206334.0, 
     6065094038.0, 
     6084947908.0, 
     6058306147.0, 
     6086983739.0, 
     6123374480.0, 
     6059063106.0, 
     6052198832.0, 
     6101146602.0, 
     6079808411.0, 
     6083383720.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5965743833.0, 
     5970887324.0, 
     5943804761.0, 
     5946398361.0, 
     5925113687.0, 
     5948846282.0, 
     5947771534.0, 
     5981796222.0, 
     5957787737.0, 
     5928669665.0, 
     5946247074.0, 
     5958331677.0, 
     5928646120.0, 
     5947294975.0, 
     5988413308.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1dfea39841fc6d545e45420b1999239f29556c05", 
   "message": "commit 1dfea39841fc6d545e45420b1999239f29556c05\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 17:12:23 2013 -0800\n\n    gl: Follow up fix for the previous commit\n    \n    Handle \"fake\" surfaces created by _cairo_gl_pattern_to_source which just\n    embed a GL backend operand. These surfaces do not have a backend, so we\n    should not fall back if a surface without a backend is not a texture\n    surface.\n", 
   "nvidia-xlib": {
    "samples": [
     7123072198.0, 
     6123259745.0, 
     6059084027.0, 
     6069617331.0, 
     6099680563.0, 
     6090234076.0, 
     6046468513.0, 
     6070131932.0, 
     6072833632.0, 
     6093282520.0, 
     6066480992.0, 
     6069756764.0, 
     6103159677.0, 
     6106225027.0, 
     6074258330.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5996657244.0, 
     5959009341.0, 
     5957806644.0, 
     5982399260.0, 
     5961094389.0, 
     5986571460.0, 
     5982985555.0, 
     5951387682.0, 
     5940081342.0, 
     5928298382.0, 
     5948900809.0, 
     5948713546.0, 
     5959470608.0, 
     5980235281.0, 
     5976105000.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7", 
   "message": "commit 2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:22:38 2013 +0000\n\n    1.12.10 release\n", 
   "nvidia-xlib": {
    "samples": [
     6654548630.0, 
     6066755056.0, 
     6059576640.0, 
     6096150250.0, 
     6070620721.0, 
     6101266055.0, 
     6099978882.0, 
     6080867618.0, 
     6074847879.0, 
     6065306289.0, 
     6083781756.0, 
     6124988966.0, 
     6087056853.0, 
     6078488371.0, 
     6069234974.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6019722892.0, 
     5990519557.0, 
     6002790427.0, 
     5977453451.0, 
     5989390384.0, 
     5971883818.0, 
     5996012155.0, 
     5994231341.0, 
     5994520987.0, 
     5974055416.0, 
     6006706934.0, 
     5980640732.0, 
     6011047499.0, 
     5997058013.0, 
     5994586767.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37", 
   "message": "commit ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:58:46 2013 +0000\n\n    version: Post-release bump to 1.12.11\n", 
   "nvidia-xlib": {
    "samples": [
     6748830894.0, 
     6079180627.0, 
     6048627996.0, 
     6114356163.0, 
     6100203100.0, 
     6085661399.0, 
     6086547254.0, 
     6096471826.0, 
     6127653145.0, 
     6105781269.0, 
     6102233185.0, 
     6121593671.0, 
     6075564928.0, 
     6111697831.0, 
     6099687231.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5996120230.0, 
     5964728141.0, 
     5954511267.0, 
     5963540045.0, 
     5952792477.0, 
     5951998848.0, 
     5943602646.0, 
     5983630661.0, 
     5977396861.0, 
     5966536323.0, 
     5988375664.0, 
     5961797844.0, 
     5972692002.0, 
     5973562178.0, 
     5969848031.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc", 
   "message": "commit fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 23 15:04:26 2013 +0000\n\n    xlib: Do not upload the whole image just because we want an entire row\n    \n    Fixes regression exposed by\n    \n    commit a73e7ff0186176bc82cd3ae1432c054c1fd3aebd\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Sun Jan 6 11:29:27 2013 +0000\n    \n        xlib: Simplify source creation by use of map-to-image\n    \n    but ultimately from\n    \n    commit 74941f822015cc50cd8477d0cf97f1a70dbff60b\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Wed Jan 2 22:27:55 2013 +0000\n    \n        xlib: Use SHM transport for ordinary image uploads\n    \n    Reported-by: G\u00f6k\u00e7en Eraslan <gokcen.eraslan@gmail.com>\n    Reported-by: Guillaume Ayoub <guillaume.ayoub@kozea.fr>\n    Reported-by: Emmanuel Benisty <benisty.e@gmail.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59635\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7035780597.0, 
     6069450212.0, 
     6058716582.0, 
     6112259806.0, 
     6092072581.0, 
     6107544198.0, 
     6085375638.0, 
     6087886627.0, 
     6052802023.0, 
     6091340120.0, 
     6097352464.0, 
     6050027139.0, 
     6064792434.0, 
     6087724020.0, 
     6054717194.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6010223792.0, 
     5982142550.0, 
     5967019410.0, 
     5967038550.0, 
     6001941202.0, 
     5963739616.0, 
     5988983012.0, 
     5964436256.0, 
     5975788184.0, 
     5982329831.0, 
     5971349534.0, 
     5971951627.0, 
     5957755061.0, 
     5986230242.0, 
     5980872134.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7054c9969cb0e41845635d6658935da223899f08", 
   "message": "commit 7054c9969cb0e41845635d6658935da223899f08\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Jan 16 15:32:32 2013 +0100\n\n    gl: Don't query the display when checking if the context changed\n    \n    If display has changed, the associated context must change. A\n    context is tied a display so we can avoid this check, eliminating\n    unnecessary work during context acquisition and release.\n", 
   "nvidia-xlib": {
    "samples": [
     7094485597.0, 
     6069458371.0, 
     6072269116.0, 
     6059390747.0, 
     6114708485.0, 
     6080631269.0, 
     6083623447.0, 
     6108688789.0, 
     6087862924.0, 
     6067662053.0, 
     6067858647.0, 
     6072050888.0, 
     6096074927.0, 
     6112835507.0, 
     6105492421.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6005032562.0, 
     6010316838.0, 
     5999120350.0, 
     5985161943.0, 
     5996757515.0, 
     6019846068.0, 
     6010045921.0, 
     5990638953.0, 
     6002889646.0, 
     6003564565.0, 
     6016062860.0, 
     5992500412.0, 
     6008465707.0, 
     5996786589.0, 
     5987760244.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "bb4072046016610a510373df3b67cdeb2ac1b583", 
   "message": "commit bb4072046016610a510373df3b67cdeb2ac1b583\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 11:55:10 2013 -0800\n\n    gl/msaa: Fix a memory leak in _clip_to_traps\n    \n    We need to clean up the polygon we create when decomposing a path into\n    trapezoids.\n", 
   "nvidia-xlib": {
    "samples": [
     6967875558.0, 
     6109141236.0, 
     6081064252.0, 
     6096955541.0, 
     6069759677.0, 
     6087994567.0, 
     6072679272.0, 
     6090993312.0, 
     6112593602.0, 
     6091585081.0, 
     6104568051.0, 
     6058419284.0, 
     6057959673.0, 
     6043297679.0, 
     6068996180.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6057439162.0, 
     6015669205.0, 
     5999653027.0, 
     5982015050.0, 
     5966554347.0, 
     5973121707.0, 
     5966070026.0, 
     5983834532.0, 
     5963843190.0, 
     5960896827.0, 
     5989275107.0, 
     5980338277.0, 
     5997273970.0, 
     5959593247.0, 
     5969083365.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a44b8bd70683a92d862b11c2d7359ce2b0a6a968", 
   "message": "commit a44b8bd70683a92d862b11c2d7359ce2b0a6a968\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 12:45:10 2013 -0800\n\n    gl: Fix typos in multisampling detection\n    \n    Instead of looking for the EXT_framebuffer_multisample, this code should\n    look for GL_EXT_framebuffer_multisample. GL_ARB_framebuffer_object also\n    contains all necessary API for using multisampling, so we don't need to\n    check for both it and the GL_EXT_framebuffer_blit and\n    GL_EXT_framebuffer_multisample pair.\n", 
   "nvidia-xlib": {
    "samples": [
     6649920224.0, 
     6062271865.0, 
     6080803107.0, 
     6047630493.0, 
     6080640835.0, 
     6057408576.0, 
     6087664252.0, 
     6068958686.0, 
     6064102918.0, 
     6085397662.0, 
     6058824242.0, 
     6070806455.0, 
     6079094414.0, 
     6108236382.0, 
     6084421337.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6030800173.0, 
     5991941231.0, 
     5976131227.0, 
     6002307569.0, 
     5999241461.0, 
     6026298119.0, 
     6007776350.0, 
     6002661590.0, 
     5970629555.0, 
     6008292808.0, 
     6000763726.0, 
     6041149917.0, 
     6032197301.0, 
     5963808582.0, 
     5951210258.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365", 
   "message": "commit 1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 22 14:54:38 2013 -0800\n\n    gl: Use GL_ALPHA textures for CAIRO_CONTENT_ALPHA glyph caching\n    \n    It's safe to us GL_ALPHA for glyph caching surfaces, since Cairo only\n    uses them for texture uploading. This saves a little bit of memory.\n", 
   "nvidia-xlib": {
    "samples": [
     6543634903.0, 
     6068317294.0, 
     6098737568.0, 
     6083656767.0, 
     6105863177.0, 
     6067956457.0, 
     6065899082.0, 
     6111533343.0, 
     6081631785.0, 
     6069336719.0, 
     6038891094.0, 
     6069792387.0, 
     6083841438.0, 
     6094087532.0, 
     6102926834.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6013575381.0, 
     5965258786.0, 
     5979654730.0, 
     6008386907.0, 
     5989422122.0, 
     5986928368.0, 
     5980986137.0, 
     5979161417.0, 
     5968028975.0, 
     6013634242.0, 
     5974762838.0, 
     5998785866.0, 
     5973848966.0, 
     6012224457.0, 
     6003287539.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "cfe0e59663c71a6ecd0c976797ac32339e363af2", 
   "message": "commit cfe0e59663c71a6ecd0c976797ac32339e363af2\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 22 20:09:01 2013 -0800\n\n    gl/msaa: Add a fast path for fills that are simple quads\n    \n    Instead of invoking Bentley-Ottman for fills that are simple\n    quadrilaterals, just pass the geometry straight to OpenGL.\n", 
   "nvidia-xlib": {
    "samples": [
     6695382025.0, 
     6090583395.0, 
     6064892432.0, 
     6066360785.0, 
     6091435888.0, 
     6069437058.0, 
     6110808122.0, 
     6087847232.0, 
     6064431722.0, 
     6050534623.0, 
     6065016990.0, 
     6069125086.0, 
     6065393756.0, 
     6051606655.0, 
     6081993579.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6022472453.0, 
     5953038626.0, 
     5967776069.0, 
     6023116340.0, 
     5963073521.0, 
     5974179292.0, 
     5990954825.0, 
     5974743960.0, 
     5991853732.0, 
     5966914576.0, 
     6018670589.0, 
     5991549522.0, 
     5982187580.0, 
     6005207641.0, 
     5992268815.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c986a7310bb06582b7d8a566d5f007ba4e5e75bf", 
   "message": "commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 24 08:55:54 2013 +0000\n\n    image: Enable inplace compositing with opacities for general routines\n    \n    On a SNB i5-2500:\n    \n    Speedups\n    ========\n             firefox-chalkboard  34284.16 -> 19637.40:  1.74x speedup\n             swfdec-giant-steps    778.35 ->   665.37:  1.17x speedup\n                      ocitysmap    485.64 ->   431.94:  1.12x speedup\n    \n    Slowdowns\n    =========\n               firefox-fishbowl  46878.98 -> 54407.14:  1.16x slowdown\n    \n    That slow down is due to overhead of the increased number of calls to\n    pixman_image_composite32() (pixman_transform_point for analyzing the\n    source extents in particular) outweighing any advantage gained by\n    performing the rasterisation in a single pass and eliding gaps. The\n    solution that has been floated in the past is for an interface into\n    pixman to only perform the analysis once and then to return a kernel to\n    use for all spans.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6529283012.0, 
     6066138858.0, 
     6073949454.0, 
     6090064524.0, 
     6112152883.0, 
     6049176512.0, 
     6101136865.0, 
     6109205119.0, 
     6092875151.0, 
     6114104022.0, 
     6061548950.0, 
     6087276050.0, 
     6068198274.0, 
     6081044022.0, 
     6079214076.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6024868054.0, 
     6002087752.0, 
     5994310515.0, 
     6043285735.0, 
     6022474786.0, 
     6011927619.0, 
     6004852433.0, 
     6146402160.0, 
     6007178617.0, 
     6015642289.0, 
     6014835850.0, 
     6010703875.0, 
     6030452239.0, 
     6021327087.0, 
     6019355921.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1d105f215a9c62f5b60541da209bf71182a2e9df", 
   "message": "commit 1d105f215a9c62f5b60541da209bf71182a2e9df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:29:44 2013 +0000\n\n    image: Fix opaque span fills\n    \n    I should have realised the previous result was too good to be true!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6511079632.0, 
     6088503326.0, 
     6128002072.0, 
     6080568070.0, 
     6252622177.0, 
     6070997471.0, 
     6105373839.0, 
     6097340109.0, 
     6109784275.0, 
     6102938816.0, 
     6063765573.0, 
     6121030022.0, 
     6087925370.0, 
     6082888545.0, 
     6071118462.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6040103739.0, 
     5990113037.0, 
     6019605337.0, 
     6033438513.0, 
     5966750278.0, 
     5989071754.0, 
     5978435145.0, 
     5976541444.0, 
     5998969854.0, 
     5992590253.0, 
     5983729781.0, 
     5974125325.0, 
     5995326090.0, 
     5981877477.0, 
     6017903640.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1ba9fb6fadcc1cb619af0ef974dffb0ff8672244", 
   "message": "commit 1ba9fb6fadcc1cb619af0ef974dffb0ff8672244\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:15:35 2013 +0000\n\n    Mark _cairo_path_is_simple_quad as private\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7176438473.0, 
     6095306197.0, 
     6071460296.0, 
     6095222175.0, 
     6096490879.0, 
     6116059158.0, 
     6114362025.0, 
     6099229898.0, 
     6105456165.0, 
     6068677882.0, 
     6126500929.0, 
     6074998121.0, 
     6059097329.0, 
     6097915961.0, 
     6083317779.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6155050383.0, 
     6134010669.0, 
     6095865992.0, 
     6107147703.0, 
     6112148651.0, 
     6131841485.0, 
     6100528619.0, 
     6129753258.0, 
     6137613163.0, 
     6110927994.0, 
     6092499756.0, 
     6120281718.0, 
     6099369670.0, 
     6100427694.0, 
     6141117937.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d9d5adec256b3935e4f261d81c37c77a2649248b", 
   "message": "commit d9d5adec256b3935e4f261d81c37c77a2649248b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:51:52 2013 +0000\n\n    image: And more fallout from c986a73, restore the absent short runs\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6819517435.0, 
     6049929133.0, 
     6065803453.0, 
     6115324954.0, 
     6081079278.0, 
     6118754582.0, 
     6091177437.0, 
     6058817618.0, 
     6085185341.0, 
     6109965092.0, 
     6115624782.0, 
     6117120081.0, 
     6112751763.0, 
     6064204471.0, 
     6100910084.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6032793894.0, 
     5974933096.0, 
     5959477217.0, 
     5982723800.0, 
     5976903877.0, 
     6002957923.0, 
     5975431368.0, 
     5992308146.0, 
     5963523060.0, 
     5966987124.0, 
     5987156171.0, 
     5938816920.0, 
     5958519992.0, 
     5962924071.0, 
     5968064875.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "3c18bae20ee2fea24d75f6986390ef8157d0207d", 
   "message": "commit 3c18bae20ee2fea24d75f6986390ef8157d0207d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 28 10:03:54 2013 +0000\n\n    perf; Do not allow the backends to optimize away the clear before sync\n    \n    The importance of writing to the scratch surface before retrieving an\n    image is that it makes that the write lands in the server queue, as well\n    as the GetImage, in order to serialise the timer against all the\n    operations.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6658726318.0, 
     6071609398.0, 
     6066490653.0, 
     6115883694.0, 
     6089013740.0, 
     6058869779.0, 
     6105384163.0, 
     6077424922.0, 
     6081708571.0, 
     6087389347.0, 
     6097033004.0, 
     6068722847.0, 
     6068630852.0, 
     6047543172.0, 
     6101540709.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6018959289.0, 
     5989441624.0, 
     5996104587.0, 
     5997514471.0, 
     5984699187.0, 
     5986188925.0, 
     6002214358.0, 
     6002319568.0, 
     5996670115.0, 
     5990492150.0, 
     6000452890.0, 
     6015296245.0, 
     6006275915.0, 
     5987388785.0, 
     6005278419.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "1d1af825bb4fcfd7c4a54b65292734ba244e096d", 
   "message": "commit 1d1af825bb4fcfd7c4a54b65292734ba244e096d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:47:48 2013 +0000\n\n    xlib/shm: Tighten mark-active to the actual CopyArea on the ShmPixmap\n    \n    Along the draw_image_boxes() upload path, we were actually marking the\n    ShmPixmap as still active for the subsequent drawing operation - which\n    could in theory never be submitted...\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7044754371.0, 
     6084792597.0, 
     6097496192.0, 
     6078161219.0, 
     6109962411.0, 
     6086414338.0, 
     6098316646.0, 
     6106286631.0, 
     6090165096.0, 
     6082671999.0, 
     6092607711.0, 
     6051963958.0, 
     6081089362.0, 
     6100556901.0, 
     6090386825.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5987679857.0, 
     5972646966.0, 
     5992162213.0, 
     5975827715.0, 
     5960883238.0, 
     5965991755.0, 
     5976701494.0, 
     5971919950.0, 
     6019700792.0, 
     5977629457.0, 
     5983725356.0, 
     6016278495.0, 
     5985901299.0, 
     5994215814.0, 
     6007601973.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "30e950515171b25d9bc3da8d535cfe05d8be69c8", 
   "message": "commit 30e950515171b25d9bc3da8d535cfe05d8be69c8\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:49:26 2013 +0000\n\n    xlib/shm: Skip creating new SHM segments if the data is already in the xserver\n    \n    If the image is already inside a SHM segment, but the image format does\n    not match the surface, fallback to the XRender paths in order to perform\n    colorspace conversion on the data already inside the Xserver.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6891733503.0, 
     6073923495.0, 
     6049415121.0, 
     6068597727.0, 
     6111723151.0, 
     6081378865.0, 
     6079602032.0, 
     6068093185.0, 
     6097405034.0, 
     6073306137.0, 
     6056220935.0, 
     6072994160.0, 
     6110992291.0, 
     6091338331.0, 
     6121353937.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6059652449.0, 
     6019965014.0, 
     6011654629.0, 
     6021801625.0, 
     6018579870.0, 
     6024309790.0, 
     6027197121.0, 
     6022562849.0, 
     6015876132.0, 
     6011732850.0, 
     6015929383.0, 
     6002987327.0, 
     6016474481.0, 
     6008388387.0, 
     6034468204.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "02a2baa8dcf49ad2d9766d43578ba216fab0d464", 
   "message": "commit 02a2baa8dcf49ad2d9766d43578ba216fab0d464\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:51:25 2013 +0000\n\n    xlib/shm: Tidy creation of the proxy source for ShmPixmaps\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7069369278.0, 
     6088463119.0, 
     6096995242.0, 
     6101573880.0, 
     6103192246.0, 
     6067135489.0, 
     6032743889.0, 
     6060391625.0, 
     6123983713.0, 
     6118182795.0, 
     6101625891.0, 
     6090472091.0, 
     6069694003.0, 
     6089198572.0, 
     6090873958.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6015746848.0, 
     6006411743.0, 
     5985323701.0, 
     6005577649.0, 
     5986989819.0, 
     5989898909.0, 
     5985920967.0, 
     6005678071.0, 
     6006693158.0, 
     5980011511.0, 
     5997172299.0, 
     5999764668.0, 
     5995205601.0, 
     5990801913.0, 
     5982893241.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a364a106b257c4493ba7b3badacc63599ba6064a", 
   "message": "commit a364a106b257c4493ba7b3badacc63599ba6064a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:52:10 2013 +0000\n\n    xlib/shm: Tidy up destroying the mempool for a shm block\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6930182525.0, 
     6076916715.0, 
     6088021478.0, 
     6120933450.0, 
     6089944225.0, 
     6081432079.0, 
     6081821048.0, 
     6077511825.0, 
     6078621223.0, 
     6074825081.0, 
     6046562632.0, 
     6109678810.0, 
     6091009267.0, 
     6060715754.0, 
     6112478274.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6041119875.0, 
     5989412671.0, 
     6001780542.0, 
     6008580106.0, 
     5989946954.0, 
     6028791971.0, 
     6026304238.0, 
     6027989101.0, 
     6006936311.0, 
     5998865564.0, 
     5982874202.0, 
     6007447219.0, 
     6014398110.0, 
     6000840576.0, 
     6006987555.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767", 
   "message": "commit fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:00:46 2013 +0000\n\n    xlib/shm: Always request a CompletionEvent from ShmPutImage\n    \n    ...and treat is as an expected event for synchronisation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6490301327.0, 
     6061746964.0, 
     6102856452.0, 
     6066183485.0, 
     6081194846.0, 
     6069010974.0, 
     6114977401.0, 
     6048979900.0, 
     6099580415.0, 
     6067372780.0, 
     6060370053.0, 
     6054139568.0, 
     6097748572.0, 
     6095712114.0, 
     6103943290.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6046349122.0, 
     6009444686.0, 
     5995332222.0, 
     5984497553.0, 
     5984402062.0, 
     6012843002.0, 
     6039235136.0, 
     5989797896.0, 
     6032571293.0, 
     5999181898.0, 
     6026533413.0, 
     6032625721.0, 
     6019010185.0, 
     6013997351.0, 
     6006887884.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c006b886d28a772d7a62cec52ab7e0c8196c36f6", 
   "message": "commit c006b886d28a772d7a62cec52ab7e0c8196c36f6\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:01:31 2013 +0000\n\n    xlib/shm: Force synchronisation for scratch SHM image buffers\n    \n    The scratch image buffers are used for uploads to the xserver and so we\n    must be careful not to overwrite active SHM segments. Unfortunately we\n    told the core SHM allocator that we would sync before using the images,\n    which was a lie.\n    \n    Reported-by: Michael Natterer <mitch@gimp.org>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6529325766.0, 
     6097734830.0, 
     6095193714.0, 
     6086301645.0, 
     6074797544.0, 
     6090730131.0, 
     6057648849.0, 
     6062767149.0, 
     6102938000.0, 
     6073763593.0, 
     6072430695.0, 
     6076605854.0, 
     6069288544.0, 
     6139938031.0, 
     6042775061.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6058129838.0, 
     6007006441.0, 
     6029927732.0, 
     6010567540.0, 
     5998455513.0, 
     6030623089.0, 
     6025872687.0, 
     6001001993.0, 
     6047372198.0, 
     6028649971.0, 
     6025840237.0, 
     5996991823.0, 
     6016243947.0, 
     6014964696.0, 
     6026319756.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "9b92625151ca75a6ee10f231f83b53f67a371947", 
   "message": "commit 9b92625151ca75a6ee10f231f83b53f67a371947\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:49:56 2013 +0000\n\n    xlib/shm: Simplify uploading of SHM image data\n    \n    Make sure that we simply copy from the SHM segment into the target\n    drawable, and not inadvertently stage it through another SHM buffer.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6920937851.0, 
     6096069574.0, 
     6061980532.0, 
     6087947027.0, 
     6045801354.0, 
     6067324331.0, 
     6117256323.0, 
     6068771972.0, 
     6087951821.0, 
     6096975551.0, 
     6097474874.0, 
     6082530188.0, 
     6100772753.0, 
     6082538640.0, 
     6066828551.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6009831991.0, 
     6016772692.0, 
     5998146418.0, 
     5984256356.0, 
     6030031383.0, 
     6005058251.0, 
     5999192566.0, 
     6001883637.0, 
     6016246735.0, 
     6000235125.0, 
     6007309073.0, 
     6011907991.0, 
     6003358289.0, 
     5991185428.0, 
     5998843328.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41ae904461e344fbfa3be3d276a7102bb4304b19", 
   "message": "commit 41ae904461e344fbfa3be3d276a7102bb4304b19\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:52:02 2013 +0000\n\n    xlib/shm: Appease the compiler for a 'maybe used uninitialised' variable\n    \n    Initialise shm during its declaration so that it is indeed initialised\n    for the cleanup after every path.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6607094563.0, 
     6060922127.0, 
     6093568104.0, 
     6092522101.0, 
     6076148580.0, 
     6059525959.0, 
     6115659378.0, 
     6125294914.0, 
     6115374584.0, 
     6083032545.0, 
     6081665340.0, 
     6091120608.0, 
     6103253423.0, 
     6075646714.0, 
     6051744725.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6041342228.0, 
     6008988133.0, 
     6007602645.0, 
     5984466126.0, 
     6029270770.0, 
     6003515439.0, 
     6039866438.0, 
     5992962218.0, 
     6031615062.0, 
     6049287445.0, 
     6012814360.0, 
     6032424226.0, 
     6017171436.0, 
     6009812108.0, 
     6041157750.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "74a19c527c1fa07ade2042a8d2acecbb5f6ccab1", 
   "message": "commit 74a19c527c1fa07ade2042a8d2acecbb5f6ccab1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 10:31:05 2013 +0000\n\n    configure: Include X11.h before testing for usability of Xrender.h\n    \n    On Solaris at least, the Xrender.h header is not standalone and requires\n    X11/X.h to be included first to define the essential types.\n    \n    Reported-by: Andreas F. Borchert <bugzilla@andreas-borchert.de>\n    Bugzilla; https://bugs.freedesktop.org/show_bug.cgi?id=58199\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6588237897.0, 
     6079554555.0, 
     6035645156.0, 
     6078541455.0, 
     6045309976.0, 
     6067948937.0, 
     6117854964.0, 
     6123401819.0, 
     6059278308.0, 
     6076170137.0, 
     6084384655.0, 
     6065709122.0, 
     6095314626.0, 
     6129198887.0, 
     6070559724.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6016725475.0, 
     6012716167.0, 
     6017574232.0, 
     6029487003.0, 
     5999757091.0, 
     5977868678.0, 
     6007278631.0, 
     6019260212.0, 
     5997974805.0, 
     6010041376.0, 
     6009558988.0, 
     6024705277.0, 
     6000640383.0, 
     5988040698.0, 
     6016671979.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "89092b97b50a7740058d0f72f94dfc6defe15ed6", 
   "message": "commit 89092b97b50a7740058d0f72f94dfc6defe15ed6\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 13:21:00 2013 -0800\n\n    gl/msaa: Don't emit alpha when emitting vertices\n    \n    The color attribute is disabled when not in spans mode, so the emitted\n    alpha is simply overwritten by the next vertex. Additionally, this can\n    potentially cause the alpha to be written past the end of the buffer.\n", 
   "nvidia-xlib": {
    "samples": [
     6588171240.0, 
     6054485667.0, 
     6115140406.0, 
     6077527907.0, 
     6071878352.0, 
     6077251268.0, 
     6069979344.0, 
     6058325495.0, 
     6051341089.0, 
     6085695923.0, 
     6063702209.0, 
     6097344100.0, 
     6089859004.0, 
     6104848879.0, 
     6106613263.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6007863512.0, 
     6016573853.0, 
     6000961737.0, 
     6013126524.0, 
     6007334162.0, 
     6037656002.0, 
     6012972429.0, 
     6026998024.0, 
     6008255996.0, 
     6040257990.0, 
     5996094540.0, 
     6004459884.0, 
     6015265243.0, 
     6011131520.0, 
     6005135877.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "91834fbdee40f46e18d071fd2671a7a642e6aa86", 
   "message": "commit 91834fbdee40f46e18d071fd2671a7a642e6aa86\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 22:12:00 2013 +0000\n\n    xlib/shm: Clarify testing of seqno\n    \n    Rename the seqno tests into seqno_passed(), seqno_before() and\n    seqno_after() in order to clarify their semantics.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7030547338.0, 
     6107611571.0, 
     6078069460.0, 
     6066141098.0, 
     6095722927.0, 
     6091730929.0, 
     6114789678.0, 
     6071913337.0, 
     6068484955.0, 
     6093709239.0, 
     6082168336.0, 
     6079850542.0, 
     6082093160.0, 
     6055683530.0, 
     6093333529.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6019991408.0, 
     6008962678.0, 
     5998014653.0, 
     5985814008.0, 
     5967632829.0, 
     5989428661.0, 
     5984143003.0, 
     5997744192.0, 
     5985034362.0, 
     5987160846.0, 
     5971974428.0, 
     6010989508.0, 
     5994194897.0, 
     5983261644.0, 
     5993637271.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2560c0b6577a6380ef175cf18bb804913784632c", 
   "message": "commit 2560c0b6577a6380ef175cf18bb804913784632c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 23:51:44 2013 +0000\n\n    xlib/shm: More clarification of seqno required\n    \n    Everytime I read the predicate wrong, but hopefully, this time I have it\n    right!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6640389324.0, 
     6088981027.0, 
     6092047513.0, 
     6066650744.0, 
     6037598264.0, 
     6105835562.0, 
     6077878601.0, 
     6066451863.0, 
     6098148993.0, 
     6063949522.0, 
     6093620863.0, 
     6083351034.0, 
     6088473400.0, 
     6054456904.0, 
     6085043629.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6061644862.0, 
     6030046245.0, 
     6021398758.0, 
     6027883321.0, 
     6015548213.0, 
     6019649027.0, 
     6044584771.0, 
     6030684003.0, 
     6023674785.0, 
     6042808160.0, 
     6021388618.0, 
     6021725519.0, 
     6017656703.0, 
     6040405633.0, 
     6030103761.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ec58fde294afd52c89fa5ed21ba2611edfdbd550", 
   "message": "commit ec58fde294afd52c89fa5ed21ba2611edfdbd550\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:06:48 2013 +0000\n\n    perf: Synchronize before stopping the timers\n    \n    Fixes a regression from\n    \n    commit 2855ff4666922f2c38505414270d47f659b0d499\n    Author: Andrea Canciani <ranma42@gmail.com>\n    Date:   Wed Aug 31 16:42:03 2011 +0200\n    \n        perf: Reuse cairo-time\n    \n    which dropped the essential call to synchronize when refactoring the\n    code.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7011918080.0, 
     6105320916.0, 
     6085597955.0, 
     6067324270.0, 
     6060632908.0, 
     6102781505.0, 
     6052933303.0, 
     6069682761.0, 
     6056167540.0, 
     6092452999.0, 
     6103207607.0, 
     6094290247.0, 
     6100705252.0, 
     6106356155.0, 
     6091920885.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6032954183.0, 
     6017818548.0, 
     5982800344.0, 
     6044546637.0, 
     6031933760.0, 
     6008143493.0, 
     6016117014.0, 
     6023109031.0, 
     6017710854.0, 
     6028515216.0, 
     6020825541.0, 
     6008901545.0, 
     6006620267.0, 
     6017356315.0, 
     5988755606.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f", 
   "message": "commit 22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:19:53 2013 +0000\n\n    image: Add a reference for the clone's parent image\n    \n    We use the parent as a flag during map-to-image/umap-image that the\n    resultant image came from a fallback rather than as direct call\n    to the backend's map_to_image(). Whilst we use it as a simple flag,\n    we need to make sure the parent surface obeys the reference counting\n    semantics and is consistent for all callers.\n    \n    Unlike other users of the parent pointer, there is no resource sharing\n    between the two surfaces.\n    \n    Reported-by: Henry Song <henry.song@samsung.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6872403104.0, 
     6057757794.0, 
     6081118376.0, 
     6105705542.0, 
     6103682084.0, 
     6062574178.0, 
     6078839068.0, 
     6047743918.0, 
     6122745935.0, 
     6054987908.0, 
     6091961420.0, 
     6074146641.0, 
     6105929483.0, 
     6103953894.0, 
     6106120556.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6094979884.0, 
     6064910405.0, 
     6048380060.0, 
     6054939112.0, 
     6062065828.0, 
     6054279272.0, 
     6017600857.0, 
     6057321245.0, 
     6079530002.0, 
     6066094195.0, 
     6070779155.0, 
     6048495035.0, 
     6081582123.0, 
     6079144247.0, 
     6068655293.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "350f9fb5366079113eb8bca947d480362c3ae6be", 
   "message": "commit 350f9fb5366079113eb8bca947d480362c3ae6be\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:15:03 2013 +0000\n\n    test: Refresh refs for aa noise following reduction of the 2-stage compositing\n    \n    A side effect of\n    \n    commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Thu Jan 24 08:55:54 2013 +0000\n    \n        image: Enable inplace compositing with opacities for general routines\n    \n    is that we should in theory be reducing the rounding errors when\n    compositing coverage.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6491535188.0, 
     6102072018.0, 
     6115613738.0, 
     6120873926.0, 
     6080322615.0, 
     6113629542.0, 
     6112792019.0, 
     6086097834.0, 
     6070594598.0, 
     6056443696.0, 
     6121938598.0, 
     6099181729.0, 
     6074859155.0, 
     6115743436.0, 
     6106991776.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6028338673.0, 
     6036550976.0, 
     6025086748.0, 
     6007561295.0, 
     6007346170.0, 
     6020511997.0, 
     6030028351.0, 
     5979280937.0, 
     5995627539.0, 
     6022466225.0, 
     5999175821.0, 
     5993747632.0, 
     6025277769.0, 
     6012670494.0, 
     6014734035.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a201a1169f472e822a66275b7dffe62f241d8ec0", 
   "message": "commit a201a1169f472e822a66275b7dffe62f241d8ec0\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:24:33 2013 +0000\n\n    1.12.12 release\n", 
   "nvidia-xlib": {
    "samples": [
     6452697037.0, 
     6106826343.0, 
     6115259205.0, 
     6142658678.0, 
     6089176811.0, 
     6072727721.0, 
     6107386800.0, 
     6113362239.0, 
     6118856309.0, 
     6077504120.0, 
     6104328912.0, 
     6066757073.0, 
     6113555165.0, 
     6105402378.0, 
     6087275012.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6074166679.0, 
     5985092356.0, 
     6018504210.0, 
     6021405625.0, 
     6029107089.0, 
     6037898645.0, 
     5989173783.0, 
     6019237052.0, 
     5996454145.0, 
     6024508379.0, 
     6029079205.0, 
     6011369586.0, 
     6043139253.0, 
     5985830019.0, 
     6026782968.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "28dbafd5643fcf637a556fc196b5b984d44d151d", 
   "message": "commit 28dbafd5643fcf637a556fc196b5b984d44d151d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 16:23:24 2013 +0000\n\n    Post release version bump to 1.12.13\n", 
   "nvidia-xlib": {
    "samples": [
     7044294532.0, 
     6063295691.0, 
     6069807214.0, 
     6079409117.0, 
     6109261992.0, 
     6090602223.0, 
     6057356576.0, 
     6045921896.0, 
     6078423152.0, 
     6107108531.0, 
     6100126274.0, 
     6081489788.0, 
     6108661339.0, 
     6076329325.0, 
     6090768248.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6026686667.0, 
     6000160706.0, 
     5985536687.0, 
     6003720413.0, 
     6010965191.0, 
     6016370872.0, 
     6007738110.0, 
     6017338257.0, 
     5996177970.0, 
     6017704834.0, 
     6005796941.0, 
     5997368297.0, 
     5995189434.0, 
     6006585248.0, 
     5984171973.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "15830fdb1087f18dcd6351de1034a5025b8ed343", 
   "message": "commit 15830fdb1087f18dcd6351de1034a5025b8ed343\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 18:50:39 2013 +0000\n\n    NEWS: fix a couple of typos\n    \n    Reported-by: Thierry Vignaud\n", 
   "nvidia-xlib": {
    "samples": [
     6621009728.0, 
     6085704607.0, 
     6084894223.0, 
     6064070356.0, 
     6099408083.0, 
     6075618042.0, 
     6062992216.0, 
     6071011757.0, 
     6071966015.0, 
     6097507507.0, 
     6089066589.0, 
     6071884215.0, 
     6034701862.0, 
     6091358347.0, 
     6075699769.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6099094231.0, 
     6071556400.0, 
     6038755488.0, 
     6009848231.0, 
     5999076528.0, 
     6011453827.0, 
     5983406658.0, 
     5987143163.0, 
     6024665575.0, 
     6004423176.0, 
     5998529774.0, 
     6005517462.0, 
     6040762286.0, 
     5982229376.0, 
     6076365199.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c391093f40472c2300f38d0e5857858f85586b60", 
   "message": "commit c391093f40472c2300f38d0e5857858f85586b60\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 1 16:31:49 2013 +0000\n\n    image: Add a convenience function for creating an image from another's data\n    \n    The GL backend would like to extract a rectangle from another surface\n    and convert it to a different pixel format. The\n    _cairo_image_surface_create_from_image() does that by returning a new\n    image that has the contents of the specified rectangle in the source\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6872743387.0, 
     6065332887.0, 
     6101142407.0, 
     6104012052.0, 
     6078412712.0, 
     6078237954.0, 
     6103937911.0, 
     6106125347.0, 
     6075295688.0, 
     6125953603.0, 
     6105738268.0, 
     6067538933.0, 
     6070452132.0, 
     6117606311.0, 
     6100921304.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5989720568.0, 
     5957393652.0, 
     5948147328.0, 
     5938953167.0, 
     5957502516.0, 
     5958736580.0, 
     5938543471.0, 
     5967198037.0, 
     5956486865.0, 
     5930609622.0, 
     5951724384.0, 
     5930448992.0, 
     5962373651.0, 
     5960117080.0, 
     5974785025.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "18cff63e3d288bf2d7773760f2ab25c80a4a2bc1", 
   "message": "commit 18cff63e3d288bf2d7773760f2ab25c80a4a2bc1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent writes to the user-data arrays during teardown\n    \n    As we cleanup the user-data arrays, we call the user provided destroy\n    notifier callbacks. These callbacks are at liberty to write back into\n    the parent surface, and in particular try to write into the arrays that\n    we have just freed. This causes hard to control and fairly unpredictable\n    use-after-frees in the client, so lets just rule out the dangerous\n    behaviour.\n    \n    References:https://bugzilla.mozilla.org/show_bug.cgi?id=722975\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6697470558.0, 
     6075658733.0, 
     6086645062.0, 
     6064938954.0, 
     6057657987.0, 
     6077958573.0, 
     6054154663.0, 
     6093700230.0, 
     6072095448.0, 
     6112725559.0, 
     6101690010.0, 
     6075191397.0, 
     6053362770.0, 
     6095001812.0, 
     6088943319.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6006146449.0, 
     5970534238.0, 
     5965751678.0, 
     5967396191.0, 
     5948232087.0, 
     5949039860.0, 
     5972485545.0, 
     5968783356.0, 
     5971142615.0, 
     5953741087.0, 
     5946706140.0, 
     5931699479.0, 
     5930987183.0, 
     5944008612.0, 
     5948360774.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "10110d58cee179cded8e4c4ff8a8d02c477585bd", 
   "message": "commit 10110d58cee179cded8e4c4ff8a8d02c477585bd\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent reads from the user-data arrays during teardown\n    \n    In a similar fashion to the previous commit, we also need to be wary of\n    users simply trying to read from a potentially freed user-data array.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6674763430.0, 
     6078568623.0, 
     6078978453.0, 
     6054282481.0, 
     6055358266.0, 
     6121381118.0, 
     6081824567.0, 
     6106352217.0, 
     6072127303.0, 
     6025392756.0, 
     6090762734.0, 
     6069400381.0, 
     6057363282.0, 
     6094873902.0, 
     6093816962.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5998206204.0, 
     5965409584.0, 
     5996922321.0, 
     5967900041.0, 
     5962951893.0, 
     5977697327.0, 
     5985706845.0, 
     5978392082.0, 
     5986305218.0, 
     5980253358.0, 
     5991052647.0, 
     5989909839.0, 
     5985673914.0, 
     5999384188.0, 
     5985940515.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d15a71f128c73ce1da19e6ff5a4e2fe044b58749", 
   "message": "commit d15a71f128c73ce1da19e6ff5a4e2fe044b58749\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 12:51:13 2013 +0000\n\n    qt: Update for fallback compositor\n    \n    We now need to explicitly manage fallbacks and to provide an\n    implementation for map-to-image/unmap-image.\n", 
   "nvidia-xlib": {
    "samples": [
     6705041242.0, 
     6084563474.0, 
     6118334014.0, 
     6086737695.0, 
     6121814878.0, 
     6070293588.0, 
     6102067740.0, 
     6074497566.0, 
     6080910764.0, 
     6104699757.0, 
     6116249505.0, 
     6065637263.0, 
     6079964385.0, 
     6126625329.0, 
     6092021243.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6012567430.0, 
     5983839678.0, 
     5943797566.0, 
     5976192477.0, 
     5966265383.0, 
     5984445864.0, 
     5968992011.0, 
     5951033956.0, 
     5992275173.0, 
     5951445064.0, 
     5972146509.0, 
     6002182937.0, 
     5997780918.0, 
     5971079926.0, 
     5986986838.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "05ad89f91241b386f72f5b9bac3ebe62faff1d1b", 
   "message": "commit 05ad89f91241b386f72f5b9bac3ebe62faff1d1b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 16:51:35 2013 +0000\n\n    gl: Replace manual vertex transformation with VS computation of texcoords\n    \n    Not only is our point transformation code is quite slow (well at least\n    compared to a real GPU), but by deriving the texture coordinates from\n    the vertex position we can elide the multiple arrays that we need to\n    construct and pass to GL - improving performance by eliminating CPU\n    overhead from needless transforms and data shovelling.\n    \n    However, not all vertex emission is suitable. For instance, for glyphs\n    we need to emit discontiguous texture coordinates for each glyph, but\n    span generation is suitable - which fortuitously also has the largest\n    vertex density and so benefits the most.\n    \n    The only real concern is for hardware without true vertex shader support\n    (e.g. i915) but there we are already invoking the VS to transform the\n    vertex into the viewport. We would need to eliminate that transform as\n    well as manually compute the texture coordinates in order to eliminate\n    the vertex recomputation pass.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6716368920.0, 
     6078618298.0, 
     6070693401.0, 
     6062758033.0, 
     6084492878.0, 
     6084225471.0, 
     6081564124.0, 
     6090316538.0, 
     6092817276.0, 
     6051769748.0, 
     6091895229.0, 
     6091306198.0, 
     6079822430.0, 
     6098573807.0, 
     6093293082.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5978922020.0, 
     5981557461.0, 
     6004173820.0, 
     5982055200.0, 
     5994832509.0, 
     5978232266.0, 
     5977630986.0, 
     5964941322.0, 
     5982026314.0, 
     5982621278.0, 
     5974440675.0, 
     5965022011.0, 
     5976035397.0, 
     5995751164.0, 
     5993318770.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "260c16331a2c7bedbcf35d7f2cbab2f1f4098c87", 
   "message": "commit 260c16331a2c7bedbcf35d7f2cbab2f1f4098c87\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Feb 4 10:43:13 2013 +0000\n\n    gl: Include the vertex ident in the shader cache hash\n    \n    As we may specialise the vertex program depending upon details of the\n    fragment shader, and may have more than one program for the same\n    combination of fragment sources, we need to include the vertex tag in\n    the cache entry.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7049249953.0, 
     6101894254.0, 
     6127801273.0, 
     6105790715.0, 
     6109521031.0, 
     6064179940.0, 
     6045058883.0, 
     6071294453.0, 
     6042976031.0, 
     6096951650.0, 
     6097706819.0, 
     6055853792.0, 
     6037309451.0, 
     6059005839.0, 
     6094987456.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6036412745.0, 
     5998182746.0, 
     6001314759.0, 
     6026645038.0, 
     6026925002.0, 
     6019246832.0, 
     6050430808.0, 
     6021374453.0, 
     6016368622.0, 
     6008733015.0, 
     6009841652.0, 
     6000746813.0, 
     6018813477.0, 
     6018797945.0, 
     6035351873.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4cb181d985adbbf79e80ff695adc908810b41544", 
   "message": "commit 4cb181d985adbbf79e80ff695adc908810b41544\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:53:38 2013 +0000\n\n    gl: do not force flush everytime uploading a glyph image to glyph cache\n    \n    In normal cases, we want to flush pending operations reading from the\n    texture before modifying its contents.  However during uploading of\n    glyphs into the glyph cache, we repeatedly modify the texture as we\n    construct the vbo (whilst referencing it for that operation). We track\n    unused areas in the glyph cache so that if we run out of space, we can\n    explicitly flush the pending glyphs and start afresh and avoid having to\n    flush the operation in common case.\n", 
   "nvidia-xlib": {
    "samples": [
     6802910352.0, 
     6105301326.0, 
     6079219826.0, 
     6113813016.0, 
     6090658671.0, 
     6042204205.0, 
     6087850469.0, 
     6088550446.0, 
     6058984421.0, 
     6097835222.0, 
     6092620494.0, 
     6089115240.0, 
     6109180612.0, 
     6101618074.0, 
     6101191302.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6037854471.0, 
     5985467425.0, 
     6000527860.0, 
     6015517088.0, 
     6023399403.0, 
     6006436097.0, 
     6010167076.0, 
     6006425740.0, 
     5988299935.0, 
     6002994474.0, 
     5994712901.0, 
     6012684613.0, 
     6009050468.0, 
     6004795937.0, 
     5992454943.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7bee1962f601009c507f987838de1a9dec3d9334", 
   "message": "commit 7bee1962f601009c507f987838de1a9dec3d9334\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 5 21:57:52 2013 +1030\n\n    type1-subset: in latin subsets replace glyph names with standard names\n    \n    When using WinAnsiEncoding in PDF the glyphs are keyed by glyph\n    name. We need to ensure the correct names are used and can't assume\n    the glyph names in the font are correct.\n    \n    Bug 60248\n", 
   "nvidia-xlib": {
    "samples": [
     6777331436.0, 
     6109987365.0, 
     6105215522.0, 
     6129875067.0, 
     6102917716.0, 
     6084833657.0, 
     6118870412.0, 
     6080263946.0, 
     6099546243.0, 
     6084023973.0, 
     6031282451.0, 
     6077610064.0, 
     6086845013.0, 
     6033205547.0, 
     6093268673.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6011390986.0, 
     5967353664.0, 
     5993869414.0, 
     5997178073.0, 
     5974934306.0, 
     5992096999.0, 
     5985929446.0, 
     5958017604.0, 
     5962281667.0, 
     5970756913.0, 
     5979263493.0, 
     5971802911.0, 
     5998924443.0, 
     5995820875.0, 
     5985044568.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "400ea9c2905461067df9e6d27c2e961d47f04676", 
   "message": "commit 400ea9c2905461067df9e6d27c2e961d47f04676\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Feb 6 12:53:14 2013 -0800\n\n    gl/msaa: Properly fall back when using CLEAR operator\n    \n    There are some situations that the MSAA compositor doesn't support using\n    the CLEAR operator. We should properly fall back in those cases.\n", 
   "nvidia-xlib": {
    "samples": [
     6705330898.0, 
     6102481065.0, 
     6069588580.0, 
     6079424331.0, 
     6043251396.0, 
     6087019438.0, 
     6073406188.0, 
     6075351728.0, 
     6082251316.0, 
     6065228425.0, 
     6053349414.0, 
     6107969208.0, 
     6048879545.0, 
     6093668726.0, 
     6084494235.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6018179449.0, 
     5970703444.0, 
     6007094659.0, 
     6046837907.0, 
     6017476576.0, 
     6037558704.0, 
     6007256759.0, 
     6016981833.0, 
     6009033997.0, 
     5993578090.0, 
     5994958667.0, 
     6005904592.0, 
     5968832695.0, 
     6012713327.0, 
     5995037655.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4b54c09c056e5dee65f2cf4e87835eb9127e5b1c", 
   "message": "commit 4b54c09c056e5dee65f2cf4e87835eb9127e5b1c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Feb 6 22:16:12 2013 +0000\n\n    image: Substitute OVER spans for SOURCE with an opaque pattern\n    \n    Based on an idea from Ravi Nanjundappa\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6662405387.0, 
     6102559398.0, 
     6075918914.0, 
     6092196213.0, 
     6101034110.0, 
     6053668561.0, 
     6107681582.0, 
     6057348314.0, 
     6066121479.0, 
     6055946500.0, 
     6082062831.0, 
     6086766656.0, 
     6092780410.0, 
     6057429984.0, 
     6098948418.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6047744656.0, 
     6013718462.0, 
     6002754040.0, 
     6026551662.0, 
     6004114058.0, 
     6029833122.0, 
     6005091509.0, 
     6005444561.0, 
     6003867465.0, 
     6027493619.0, 
     6013830378.0, 
     6025413042.0, 
     6028839790.0, 
     6022782692.0, 
     6024531659.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4b6b28b5e8b9020c72a60b01ff3340a70dd59478", 
   "message": "commit 4b6b28b5e8b9020c72a60b01ff3340a70dd59478\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 10:00:47 2013 +0000\n\n    win32: Fix is_win98()\n    \n    Since the translation into a separate function, its condition was\n    reversed: that is almost everybody thought they were on a win98 machine\n    and so had no working AlphaBlend().\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6622355250.0, 
     6095177396.0, 
     6069043992.0, 
     6055639349.0, 
     6048523936.0, 
     6044037327.0, 
     6055934609.0, 
     6105500803.0, 
     6115975457.0, 
     6093041255.0, 
     6101916901.0, 
     6128959985.0, 
     6087216655.0, 
     6102406939.0, 
     6078372550.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6064251545.0, 
     6033432825.0, 
     6029772685.0, 
     6033611768.0, 
     6029418669.0, 
     6056479484.0, 
     6026562046.0, 
     6023701664.0, 
     6035774968.0, 
     6056186528.0, 
     6031170732.0, 
     6044674843.0, 
     6061169005.0, 
     6062466665.0, 
     6083963583.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "562cc8227feb99b75fb53df7800df66887be129d", 
   "message": "commit 562cc8227feb99b75fb53df7800df66887be129d\nAuthor: Ravi Nanjundappa <ravi.nanjundappa@gmail.com>\nDate:   Mon Feb 6 10:56:55 2012 +0530\n\n    gl/spans: Handle SOURCE operations with opaque sources.\n    \n    SOURCE operations with an opaque are equivalent to OVER.\n    This can prevent us from falling back in certain cases.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6635486045.0, 
     6061068819.0, 
     6111418698.0, 
     6069862743.0, 
     6098740042.0, 
     6111342858.0, 
     6087859777.0, 
     6054847449.0, 
     6114910861.0, 
     6099380663.0, 
     6086877480.0, 
     6141197156.0, 
     6083678970.0, 
     6112064656.0, 
     6062909486.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6032144720.0, 
     6003391542.0, 
     6020593153.0, 
     5993904326.0, 
     6007999541.0, 
     6005957200.0, 
     6006140368.0, 
     6007228787.0, 
     5993317363.0, 
     6031240475.0, 
     6017997317.0, 
     6029299583.0, 
     6012430419.0, 
     5995412794.0, 
     6008898399.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "607a15db5df04d10e5be6d06599ec4e9d98d2446", 
   "message": "commit 607a15db5df04d10e5be6d06599ec4e9d98d2446\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 21:40:30 2013 +0000\n\n    gl: Mark up _cairo_gl_composite_set_operator* as private\n    \n    Add the cairo_private markup to hide the PLT entries and to keep make\n    check happy.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6580099882.0, 
     6080916123.0, 
     6103476980.0, 
     6095864918.0, 
     6100989503.0, 
     6046569017.0, 
     6021001272.0, 
     6073679694.0, 
     6092430137.0, 
     6098866460.0, 
     6084794960.0, 
     6071004503.0, 
     6054508975.0, 
     6045697306.0, 
     6121133343.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5973578592.0, 
     5995800928.0, 
     6024969060.0, 
     5969000848.0, 
     5971734371.0, 
     5974712984.0, 
     5987365715.0, 
     6005775479.0, 
     5987371713.0, 
     5977320518.0, 
     5999980556.0, 
     5966856716.0, 
     5986628852.0, 
     5976734296.0, 
     6042990379.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa", 
   "message": "commit 8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:10:25 2013 +0000\n\n    polygon: Only rely on the computed boundary intersections for crossing edges\n    \n    If we need to extrapolate the edge to the boundary, then we run the risk\n    of an overflow for an immaterial result. So if the edge does not cross\n    the boundary, we can simply use the corresponding end-point and not emit\n    the boundary segment.\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60489\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6854150147.0, 
     6072410106.0, 
     6087558983.0, 
     6093236396.0, 
     6101048590.0, 
     6106478391.0, 
     6034558087.0, 
     6077335926.0, 
     6059999414.0, 
     6083684417.0, 
     6067326067.0, 
     6093566636.0, 
     6061405219.0, 
     6073953009.0, 
     6070017258.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6006428014.0, 
     6006374398.0, 
     6011568604.0, 
     5967961889.0, 
     5986320677.0, 
     5963959831.0, 
     5949762394.0, 
     5950972066.0, 
     5967107670.0, 
     5942666263.0, 
     5959945512.0, 
     5958633199.0, 
     5971754719.0, 
     5963451188.0, 
     5972382022.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ea16302e45ced56e6f12b8520e9f530e1ffc68c4", 
   "message": "commit ea16302e45ced56e6f12b8520e9f530e1ffc68c4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:22:01 2013 +0000\n\n    polygon: Avoid computing the unused intersection coordinates\n    \n    If we only ignore the result of the computed boundary intersection,\n    because the edge is inside that boundary, then we can simply forgo the\n    calculation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6876121170.0, 
     6070769849.0, 
     6094858361.0, 
     6084100033.0, 
     6077287139.0, 
     6080917735.0, 
     6081124121.0, 
     6099771681.0, 
     6048920742.0, 
     6096656904.0, 
     6081851983.0, 
     6106796755.0, 
     6100060139.0, 
     6083540944.0, 
     6063754577.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5996107803.0, 
     6000958216.0, 
     6007084058.0, 
     5974804402.0, 
     5990756355.0, 
     5979030780.0, 
     6010205697.0, 
     5978991631.0, 
     5986721169.0, 
     5993250374.0, 
     5990314344.0, 
     6005657177.0, 
     5979886388.0, 
     5975594848.0, 
     5981085454.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2d7ac9e737f37daf8490c27e6a04c65bba642645", 
   "message": "commit 2d7ac9e737f37daf8490c27e6a04c65bba642645\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 15:19:14 2013 +0000\n\n    xlib: Only apply the dst offset to the glyph strings once\n    \n    The elts offset is a delta from the previous glyph coordinate. So by\n    subtracting the dst origin everytime, we were accumulating a glyph\n    position error. Instead we just want to offset the starting coordinate\n    and then always use relative positions.\n    \n    Reported-by: Theo Veenker <T.J.G.Veenker@uu.nl>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6699558793.0, 
     6116935323.0, 
     6087341100.0, 
     6103917764.0, 
     6111442456.0, 
     6131304175.0, 
     6100902487.0, 
     6068967082.0, 
     6080975249.0, 
     6109864738.0, 
     6114403463.0, 
     6100079825.0, 
     6089777296.0, 
     6085324094.0, 
     6050397699.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6020168870.0, 
     6011852002.0, 
     5970824571.0, 
     6004935572.0, 
     5965680085.0, 
     6030971501.0, 
     6005632869.0, 
     6006657687.0, 
     5974342502.0, 
     6012865779.0, 
     5979956203.0, 
     5979398732.0, 
     5960783084.0, 
     5983169423.0, 
     5987803765.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d4651676e1496f0354acb0ef045e8b65601edf6d", 
   "message": "commit d4651676e1496f0354acb0ef045e8b65601edf6d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 22:17:13 2013 +0000\n\n    win32: Clear the similar-image before returning to the user\n    \n    Our userspace API mandates that surfaces created for the user are\n    cleared before they are returned. Make it so for the win32 similar image\n    constructor.\n    \n    Reported-by: Michael Henning <drawoc@darkrefraction.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60519\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6870492387.0, 
     6108924707.0, 
     6066696323.0, 
     6079597471.0, 
     6069859115.0, 
     6064767851.0, 
     6061842848.0, 
     6114103490.0, 
     6100821110.0, 
     6046464502.0, 
     6043960875.0, 
     6106319683.0, 
     6095212288.0, 
     6054876642.0, 
     6060903227.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6002629977.0, 
     5974675154.0, 
     5986222020.0, 
     5961996719.0, 
     6007826995.0, 
     5974522976.0, 
     5960207120.0, 
     5990575330.0, 
     5971761116.0, 
     5959672145.0, 
     5977939151.0, 
     5968577894.0, 
     6044063893.0, 
     5966821244.0, 
     5980418236.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "93ddc3a28308bcd9e062178ceb453f26e9228fc4", 
   "message": "commit 93ddc3a28308bcd9e062178ceb453f26e9228fc4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:13:31 2013 +0000\n\n    tests: Update reference images after adjustments to polygon line clipping\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6481256444.0, 
     6094837953.0, 
     6087595168.0, 
     6120175759.0, 
     6094692314.0, 
     6066673095.0, 
     6034965319.0, 
     6055792723.0, 
     6091783158.0, 
     6114740418.0, 
     6067570655.0, 
     6105687771.0, 
     6102594161.0, 
     6050753732.0, 
     6095487729.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5990169585.0, 
     5942202353.0, 
     5976557239.0, 
     5944143710.0, 
     5965889340.0, 
     5958591820.0, 
     5944204265.0, 
     5954543189.0, 
     5954486649.0, 
     5954698679.0, 
     5948676778.0, 
     5943509842.0, 
     5940016042.0, 
     5952723633.0, 
     5944979093.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "0dac37c41473deafa4a2f154187c5c3d08b07c91", 
   "message": "commit 0dac37c41473deafa4a2f154187c5c3d08b07c91\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:38:28 2013 +0000\n\n    1.12.14 release\n", 
   "nvidia-xlib": {
    "samples": [
     6555611772.0, 
     6084062887.0, 
     6088409852.0, 
     6109041889.0, 
     6104920214.0, 
     6087690142.0, 
     6085297840.0, 
     6070832442.0, 
     6043893140.0, 
     6105282601.0, 
     6129013449.0, 
     6093799261.0, 
     6078505324.0, 
     6116754822.0, 
     6061201697.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6078116076.0, 
     6023266459.0, 
     6015510245.0, 
     6040551561.0, 
     5984462473.0, 
     6026583427.0, 
     6018452676.0, 
     6061439442.0, 
     5995954491.0, 
     5991115484.0, 
     6055253903.0, 
     6004286812.0, 
     6039393390.0, 
     6036952019.0, 
     6018251854.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7f3cca458a7546f913533f693b581325228aba4e", 
   "message": "commit 7f3cca458a7546f913533f693b581325228aba4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 14:18:47 2013 +0000\n\n    Post release version bump to 1.12.15\n", 
   "nvidia-xlib": {
    "samples": [
     6821559978.0, 
     6096021170.0, 
     6099022394.0, 
     6071100101.0, 
     6120418573.0, 
     6113551100.0, 
     6093004301.0, 
     6048886008.0, 
     6110439624.0, 
     6106282698.0, 
     6096378969.0, 
     6134580217.0, 
     6123955859.0, 
     6068690787.0, 
     6112864664.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5981452264.0, 
     5968637773.0, 
     5974487775.0, 
     5951792701.0, 
     5976174133.0, 
     5996988573.0, 
     5978997726.0, 
     5971682463.0, 
     5954500295.0, 
     5958934825.0, 
     5962320194.0, 
     5959927434.0, 
     5974847960.0, 
     5958913341.0, 
     5970864732.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "14237f11439831377b59e8ea5717de5dd3e19e73", 
   "message": "commit 14237f11439831377b59e8ea5717de5dd3e19e73\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:11:12 2013 +0000\n\n    spans: Mark the surface as cleared in preparing for recording surface playback\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     7016782410.0, 
     6060358633.0, 
     6099113608.0, 
     6059959700.0, 
     6116058036.0, 
     6095657745.0, 
     6081092308.0, 
     6108025294.0, 
     6100446552.0, 
     6092572933.0, 
     6062184609.0, 
     6078848754.0, 
     6097558777.0, 
     6115459222.0, 
     6097447883.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6012882920.0, 
     5995499611.0, 
     5997384279.0, 
     5995842615.0, 
     5988106464.0, 
     6000685911.0, 
     5968093130.0, 
     5958720082.0, 
     5993401126.0, 
     5969034893.0, 
     5982836824.0, 
     5978374730.0, 
     6027646058.0, 
     5992897097.0, 
     5965572276.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be1561dadece6e947a3ca78d1124197b4278ce96", 
   "message": "commit be1561dadece6e947a3ca78d1124197b4278ce96\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:24:08 2013 +0000\n\n    recording: Avoid indirection through indices array if not reduced\n    \n    If we don't discard any elements, then the index array is simply a 1:1\n    mapping of the element array, and we may as well bypass it.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6739124403.0, 
     6092235605.0, 
     6116498788.0, 
     6098165454.0, 
     6080664621.0, 
     6055476814.0, 
     6086514385.0, 
     6073563607.0, 
     6096997412.0, 
     6102905937.0, 
     6052405282.0, 
     6094704264.0, 
     6101090365.0, 
     6095521894.0, 
     6090608751.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6108999857.0, 
     6011811988.0, 
     6012794534.0, 
     6081586722.0, 
     6023276102.0, 
     6010608313.0, 
     6011265184.0, 
     6057391624.0, 
     5990773277.0, 
     6038632335.0, 
     6051542753.0, 
     6004024146.0, 
     6041028927.0, 
     6012723140.0, 
     6065375054.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a09b7c79278465ee1ad916697e0153eae640d8df", 
   "message": "commit a09b7c79278465ee1ad916697e0153eae640d8df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:25:03 2013 +0000\n\n    path: Fix bbox computation for negative scale factors\n    \n    The fast path for transforming a path by a simple scale factor, forgot\n    to fix up the orientation of the box if that scale factor was negative.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6678731276.0, 
     6079332644.0, 
     6069137558.0, 
     6077271497.0, 
     6082605735.0, 
     6066135986.0, 
     6076642799.0, 
     6102494649.0, 
     6074278712.0, 
     6055791025.0, 
     6084829561.0, 
     6054235346.0, 
     6103604185.0, 
     6081611911.0, 
     6091687227.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6026428566.0, 
     5985176686.0, 
     6023089364.0, 
     5995316507.0, 
     5979727448.0, 
     6011298153.0, 
     5974886575.0, 
     5988374886.0, 
     6001762242.0, 
     5984464898.0, 
     6004849372.0, 
     5996164026.0, 
     5990541083.0, 
     5986470389.0, 
     6000233789.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "02b467a28703a0bd68b92fb26f7905bf6a25bf7d", 
   "message": "commit 02b467a28703a0bd68b92fb26f7905bf6a25bf7d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:46:42 2013 +0000\n\n    test: Exercise replaying a recording surface through a flip matrix\n", 
   "nvidia-xlib": {
    "samples": [
     6576030901.0, 
     6127298203.0, 
     6131304223.0, 
     6061097626.0, 
     6037262077.0, 
     6078612410.0, 
     6094640938.0, 
     6106260821.0, 
     6104444794.0, 
     6092630543.0, 
     6073609171.0, 
     6088264233.0, 
     6090455879.0, 
     6107320478.0, 
     6125965174.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6068859903.0, 
     6029514661.0, 
     6041896838.0, 
     6045553811.0, 
     6025619185.0, 
     6002812714.0, 
     5988484533.0, 
     6058804753.0, 
     6041526022.0, 
     6015708559.0, 
     6045542945.0, 
     6024929591.0, 
     6004970149.0, 
     6014578151.0, 
     6018198741.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41e646e019911f8e566e4f9963036117750f862f", 
   "message": "commit 41e646e019911f8e566e4f9963036117750f862f\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:30:25 2013 +0000\n\n    gl: disable GL_DITHER\n    \n    GL_DITHER is enabled by default by spec. Leaving GL_DITHER enabled\n    causes color pixel mismatch on some drivers by comparing uploading then\n    readPixels and original image.\n", 
   "nvidia-xlib": {
    "samples": [
     6537559288.0, 
     6091868875.0, 
     6052239807.0, 
     6106531733.0, 
     6106257663.0, 
     6081499697.0, 
     6122052755.0, 
     6081545028.0, 
     6097518844.0, 
     6100105480.0, 
     6077070139.0, 
     6094592655.0, 
     6102499347.0, 
     6104030107.0, 
     6073720490.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6054352860.0, 
     6029356918.0, 
     6011950481.0, 
     5962989773.0, 
     5945266794.0, 
     5963022287.0, 
     5943607192.0, 
     5947994750.0, 
     6000499182.0, 
     6012238969.0, 
     5971748505.0, 
     5968519086.0, 
     5973296099.0, 
     6007623450.0, 
     6029667388.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fb1abbc4bc25c541cfb1084012a6a185c541c340", 
   "message": "commit fb1abbc4bc25c541cfb1084012a6a185c541c340\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 15 14:04:21 2013 +0000\n\n    win32: Free the fallback upon finish\n    \n    Zoz\u00f3 Teki pointed out that we leak the fallback surface upon finish in\n    case it was active at the time as the preceding flush would only clear\n    the damage and not decouple the fallback surface.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6761970591.0, 
     6069793702.0, 
     6129552797.0, 
     6091208873.0, 
     6079626104.0, 
     6098523336.0, 
     6111603603.0, 
     6106155805.0, 
     6110645762.0, 
     6116194257.0, 
     6056877171.0, 
     6079037171.0, 
     6106799466.0, 
     6080621908.0, 
     6065413808.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5999355409.0, 
     5968438858.0, 
     5955095660.0, 
     5976628450.0, 
     5966321823.0, 
     5981015447.0, 
     5979439818.0, 
     5950431558.0, 
     5970513040.0, 
     5970753030.0, 
     5992375869.0, 
     5981990199.0, 
     5971603569.0, 
     5977184907.0, 
     6005509258.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "e7e1ac235ff94d184d88c8c206b81343822f6a4e", 
   "message": "commit e7e1ac235ff94d184d88c8c206b81343822f6a4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 19 09:54:24 2013 +0000\n\n    image: Compare against the true size of the embedded buffer\n    \n    When querying whether the run is small enough to fit inside the\n    pre-allocated temporary buffer, we need to avoid comparing against\n    sizeof(buf) as buf is a variable length array and so sizeof() is\n    meaningless.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6847177265.0, 
     6110274062.0, 
     6082463137.0, 
     6069872686.0, 
     6063812892.0, 
     6099715597.0, 
     6085944205.0, 
     6068894081.0, 
     6101768346.0, 
     6052248183.0, 
     6072323718.0, 
     6124564217.0, 
     6049021242.0, 
     6054146714.0, 
     6112133783.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6025250153.0, 
     5980269253.0, 
     6003542888.0, 
     5960513661.0, 
     6017470981.0, 
     5972914277.0, 
     5977717218.0, 
     5984142924.0, 
     5972961466.0, 
     5978801069.0, 
     6001819984.0, 
     5993702955.0, 
     5998192763.0, 
     5962101712.0, 
     5986745044.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "446a3dc5c0298e35b9a1e38460bc3804ab6e01ce", 
   "message": "commit 446a3dc5c0298e35b9a1e38460bc3804ab6e01ce\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 19 20:59:16 2013 +1030\n\n    pdf: add missing 'endobj' to shading dict\n    \n    https://bugs.launchpad.net/ubuntu/+source/libcairo/+bug/1051939\n", 
   "nvidia-xlib": {
    "samples": [
     6483082682.0, 
     6070479368.0, 
     6093065456.0, 
     6074086232.0, 
     6094865929.0, 
     6091379210.0, 
     6124042559.0, 
     6070690207.0, 
     6088757314.0, 
     6087176502.0, 
     6087829294.0, 
     6101027801.0, 
     6084920828.0, 
     6057353851.0, 
     6094102868.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6012516451.0, 
     5994436596.0, 
     5983044641.0, 
     5984207782.0, 
     5957430678.0, 
     5998202380.0, 
     5990187279.0, 
     5998409626.0, 
     5993222056.0, 
     5995092957.0, 
     6001229049.0, 
     5956392173.0, 
     5967627854.0, 
     6015400875.0, 
     5981077109.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7658eced9a45f42033c2b0b45cee70f6edb6ff20", 
   "message": "commit 7658eced9a45f42033c2b0b45cee70f6edb6ff20\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 24 17:07:54 2013 +0000\n\n    xlib: Fix invocation of XRenderFindFormat()\n    \n    The 'count' parameter is an indication to libXrender of the number of\n    matches to skip before reporting (rather than a limit on the number to\n    report). As we only want the first match, always pass 0.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6558666653.0, 
     6078273633.0, 
     6094700390.0, 
     6080744892.0, 
     6069610999.0, 
     6046292185.0, 
     6070613047.0, 
     6079463383.0, 
     6088461084.0, 
     6070207948.0, 
     6059559133.0, 
     6094796596.0, 
     6080142962.0, 
     6118140170.0, 
     6048948982.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5974929787.0, 
     6000527712.0, 
     5962757610.0, 
     5976794997.0, 
     6001273111.0, 
     5989442007.0, 
     5984613386.0, 
     5996626839.0, 
     5973624061.0, 
     5995360896.0, 
     6001263536.0, 
     5991855560.0, 
     6013832479.0, 
     5996084385.0, 
     5988620074.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4f00d2344c84a1017a1e7d76ccb2fa552c80a969", 
   "message": "commit 4f00d2344c84a1017a1e7d76ccb2fa552c80a969\nAuthor: Jana Saout <jana@saout.de>\nDate:   Fri Mar 1 20:10:28 2013 +1030\n\n    pdf: Fix crash\n    \n    Bug 61451\n", 
   "nvidia-xlib": {
    "samples": [
     7060774739.0, 
     6076926800.0, 
     6073446055.0, 
     6060704172.0, 
     6104978276.0, 
     6114838773.0, 
     6083057743.0, 
     6066535333.0, 
     6059031672.0, 
     6082890470.0, 
     6039779836.0, 
     6104299385.0, 
     6061159566.0, 
     6100634522.0, 
     6073385695.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5979641100.0, 
     5978643712.0, 
     6025098500.0, 
     5975546625.0, 
     5938119356.0, 
     5951892501.0, 
     5949456427.0, 
     5938761049.0, 
     5943124465.0, 
     5958768248.0, 
     5964198245.0, 
     5973010538.0, 
     5976945949.0, 
     5956977796.0, 
     5961211600.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a8f1b456db744e33a10b2301df03528787e5b1ca", 
   "message": "commit a8f1b456db744e33a10b2301df03528787e5b1ca\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Fri Mar 8 06:21:59 2013 -0500\n\n    [FT] Prefer downscaling bitmap glyphs to upscaling\n    \n    Say, you have bitmap strikes for sizes 50ppem and 100ppem.\n    To render at 60ppem, it's much better to downscale the 100ppem\n    bitmap than upscale 50ppem one.  Prefer downscaling.\n", 
   "nvidia-xlib": {
    "samples": [
     6606846541.0, 
     6067713074.0, 
     6073286659.0, 
     6076026219.0, 
     6072516478.0, 
     6065184005.0, 
     6076625832.0, 
     6096108827.0, 
     6121511666.0, 
     6111237693.0, 
     6061912261.0, 
     6054830131.0, 
     6100255113.0, 
     6057159022.0, 
     6067770574.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6024715740.0, 
     5984401969.0, 
     5991043505.0, 
     6006382275.0, 
     5981510450.0, 
     6005290222.0, 
     5984532454.0, 
     6006854561.0, 
     5982556367.0, 
     5984175785.0, 
     5970852746.0, 
     6014760045.0, 
     6007195796.0, 
     5973101085.0, 
     5950893694.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "524e6fd3e82d952dfa850b832238a1f4f9ccb8bb", 
   "message": "commit 524e6fd3e82d952dfa850b832238a1f4f9ccb8bb\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Thu Mar 7 16:33:27 2013 +0000\n\n    gl: Export query for EGLContext and EGLDisplay from device\n    \n    Similar to glx, add query for the EGLContext and EGLDisplay to egl-based\n    cairo devices.\n"
  }, 
  {
   "commit": "f50ced2e7b4b2f4601dc9b9edf1a861401c302e4", 
   "message": "commit f50ced2e7b4b2f4601dc9b9edf1a861401c302e4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Mar 8 14:25:26 2013 +0000\n\n    gl: Fix typo s/bool/cairo_bool_t/\n    \n    One quickly gets used to having stdbool.h available.\n", 
   "nvidia-xlib": {
    "samples": [
     6492252234.0, 
     6098005034.0, 
     6094382971.0, 
     6106115425.0, 
     6090857234.0, 
     6385752813.0, 
     6299703323.0, 
     6087034024.0, 
     6040268089.0, 
     6070827209.0, 
     6089052094.0, 
     6088767356.0, 
     6080958008.0, 
     6089389603.0, 
     6050776001.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6052276432.0, 
     5998027669.0, 
     6034982418.0, 
     5982730141.0, 
     5983547464.0, 
     5981412143.0, 
     6005835400.0, 
     6014749499.0, 
     6033203787.0, 
     6021873834.0, 
     5996547014.0, 
     6024916000.0, 
     5998761842.0, 
     6018940349.0, 
     6023433266.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "5ee136b2c067c92e85f04ba0c84966f7760f4556", 
   "message": "commit 5ee136b2c067c92e85f04ba0c84966f7760f4556\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 8 10:29:55 2013 -0800\n\n    gl: Setup operands when the vertex size changes\n    \n    Previously _cairo_gl_composite_setup_vbo was overwriting the old context\n    vertex_size, while _cairo_gl_context_setup_operand was relying on it to\n    determine if the vertex size changed. Instead of a fragile ordering of\n    statements, pass whether the vertex size changed as an argument to enforce\n    the calling order via method parameters.\n", 
   "nvidia-xlib": {
    "samples": [
     6569287520.0, 
     6080477204.0, 
     6055028595.0, 
     6101916557.0, 
     6041112124.0, 
     6062643995.0, 
     6112382862.0, 
     6072339716.0, 
     6081674120.0, 
     6053924919.0, 
     6117878075.0, 
     6069476162.0, 
     6088743849.0, 
     6111405586.0, 
     6112989999.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6040754517.0, 
     6022051945.0, 
     6006328860.0, 
     6024682929.0, 
     5999604258.0, 
     6018734467.0, 
     6019869933.0, 
     6021520166.0, 
     6010928825.0, 
     6024108927.0, 
     6018112720.0, 
     6006559508.0, 
     6019205445.0, 
     6028847105.0, 
     6024069911.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c60e23feb16a8745eaa6d213a89f61ded5707731", 
   "message": "commit c60e23feb16a8745eaa6d213a89f61ded5707731\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Mar 13 17:19:19 2013 -0700\n\n    path: Fix a bug in line intersection\n    \n    Before the intersection code was not taking into account that both\n    quotients are required to be in the range (0,1) for the segments to\n    intersect or handling the case of negative numerators and denominators.\n", 
   "nvidia-xlib": {
    "samples": [
     7069194162.0, 
     6073729815.0, 
     6075443934.0, 
     6098601820.0, 
     6079808659.0, 
     6077343566.0, 
     6099292915.0, 
     6070474696.0, 
     6070655295.0, 
     6097399345.0, 
     6106288355.0, 
     6085897485.0, 
     6111529674.0, 
     6097564912.0, 
     6105148711.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6091864436.0, 
     6039551565.0, 
     6026923994.0, 
     6025377470.0, 
     5994220477.0, 
     6010369943.0, 
     6034422372.0, 
     6025016624.0, 
     5997756088.0, 
     6013044918.0, 
     6005235890.0, 
     5988937264.0, 
     6045507183.0, 
     6019759602.0, 
     6038557365.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "aadece05fb1cf80f0a1138368f4664e878a59204", 
   "message": "commit aadece05fb1cf80f0a1138368f4664e878a59204\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:16:01 2013 -0700\n\n    stroke: Fix large line widths for fallback stroke shaper\n    \n    Fix the test case line-width-tolerance for the fallback stroke shaper.\n    Instead of drawing quads between spline points, draw triangle based on\n    the actual spline edges. This roughly follows the approach of the\n    tristrip and polygonal shapers.\n", 
   "nvidia-xlib": {
    "samples": [
     7025547301.0, 
     6075468600.0, 
     6056545104.0, 
     6082643909.0, 
     6081961278.0, 
     6079890752.0, 
     6084180376.0, 
     6082997217.0, 
     6109404092.0, 
     6092734436.0, 
     6078456078.0, 
     6091540273.0, 
     6101122201.0, 
     6083222908.0, 
     6062085377.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6069345301.0, 
     6052835428.0, 
     6065653664.0, 
     6065029851.0, 
     6069381164.0, 
     6021622287.0, 
     6041085303.0, 
     6035174751.0, 
     6026502457.0, 
     6035055316.0, 
     6055810671.0, 
     6031649697.0, 
     6043229111.0, 
     6048613775.0, 
     6042777152.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2c2dccf5a4d298c866f7c0faed2e10c65252c168", 
   "message": "commit 2c2dccf5a4d298c866f7c0faed2e10c65252c168\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:17:19 2013 -0700\n\n    stroke: Use round-joins near inflection points of splines\n    \n    Similar to b7bd5ae4f3da44131261711bb236cd7aa24a3ae3, but applied to the\n    fallback stroke shaper.\n", 
   "nvidia-xlib": {
    "samples": [
     6790621952.0, 
     6137331041.0, 
     6091431999.0, 
     6081797114.0, 
     6117415445.0, 
     6086851471.0, 
     6075041589.0, 
     6085249057.0, 
     6059489466.0, 
     6086760649.0, 
     6111096946.0, 
     6077267102.0, 
     6083601575.0, 
     6104106875.0, 
     6071235463.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6052829416.0, 
     6040653187.0, 
     6036344388.0, 
     5976130720.0, 
     5990932832.0, 
     5972789428.0, 
     6001024181.0, 
     5966440863.0, 
     6022935130.0, 
     6015557305.0, 
     6028403364.0, 
     6004699627.0, 
     6004717783.0, 
     5975208453.0, 
     6023732685.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "01a8bf01c6508a4fea8d40371c3049e7a2f7908a", 
   "message": "commit 01a8bf01c6508a4fea8d40371c3049e7a2f7908a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Mar 15 09:08:00 2013 +0000\n\n    mempool: Reduce an assert into an error return for get_buddy()\n    \n    If we ask for a buddy that is outside of our allocation that is an\n    error that should not happen with a power-of-two allocated zone...\n    However, since it has been seen in the wild, we can safely return that\n    there is no buddy rather than die in a too-late assert.\n    \n    Reported-by: Anton Eliasson <devel@antoneliasson.se>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6534817355.0, 
     6086083547.0, 
     6130026994.0, 
     6094162996.0, 
     6099611031.0, 
     6083395350.0, 
     6065361882.0, 
     6035995061.0, 
     6091783449.0, 
     6054537372.0, 
     6108604867.0, 
     6076690111.0, 
     6067243067.0, 
     6070113939.0, 
     6075088998.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6043496564.0, 
     6026015498.0, 
     6010518009.0, 
     6008259111.0, 
     6028467196.0, 
     5991794006.0, 
     6021336591.0, 
     6007223434.0, 
     6027336007.0, 
     6012035718.0, 
     6052965584.0, 
     6024494916.0, 
     6015323354.0, 
     6056703944.0, 
     6039880219.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c141615a7fa632a2435b49f3949ed1fc9962af1f", 
   "message": "commit c141615a7fa632a2435b49f3949ed1fc9962af1f\nAuthor: Marek Kasik <mkasik@redhat.com>\nDate:   Fri Mar 15 14:46:19 2013 +0100\n\n    cff-subset: Fix allocation of width arrays\n    \n    fd_default_width and fd_nominal_width\n    are arrays of doubles not arrays of ints.\n", 
   "nvidia-xlib": {
    "samples": [
     6909400767.0, 
     6065334132.0, 
     6105702432.0, 
     6058480609.0, 
     6141704983.0, 
     6088474451.0, 
     6069913529.0, 
     6103716645.0, 
     6070837003.0, 
     6071363514.0, 
     6099544403.0, 
     6081874181.0, 
     6068209969.0, 
     6068251296.0, 
     6127930237.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6077455674.0, 
     6061028583.0, 
     6024288561.0, 
     6054426389.0, 
     6008571549.0, 
     6023952208.0, 
     6050445380.0, 
     6019218947.0, 
     6045548465.0, 
     6066535928.0, 
     6058109855.0, 
     6018413351.0, 
     6011888451.0, 
     6016154214.0, 
     5997407102.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "592f5944239debfa3dacc410f675261947156baf", 
   "message": "commit 592f5944239debfa3dacc410f675261947156baf\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 15 16:53:28 2013 +0100\n\n    test: Fix CAIRO_REF_DIR\n    \n    Ever since the test output was moved from test/ to test/output/, using\n    CAIRO_REF_DIR to make the test suite succeed no longer works. The test suite was\n    looking for the wrong file names.\n    \n    This patch makes this work again. However, I am not sure that this really is the\n    correct fix. It just seems to work. :-)\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6506446079.0, 
     6115913200.0, 
     6102617601.0, 
     6063706625.0, 
     6109613332.0, 
     6108335388.0, 
     6057602716.0, 
     6092141226.0, 
     6102271399.0, 
     6085444987.0, 
     6105600957.0, 
     6053899779.0, 
     6103271021.0, 
     6095575940.0, 
     6083554934.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6027288961.0, 
     6006612010.0, 
     6052730943.0, 
     6021644897.0, 
     6007536220.0, 
     6065663295.0, 
     6027273386.0, 
     6048318610.0, 
     5968683165.0, 
     5991445082.0, 
     5998060000.0, 
     6002496586.0, 
     6018468001.0, 
     5971982540.0, 
     5988190366.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "0e999edff869bc08522a6a56c69efa9b5e1c33b5", 
   "message": "commit 0e999edff869bc08522a6a56c69efa9b5e1c33b5\nAuthor: Matthew Fischer <matthew.fischer@canonical.com>\nDate:   Sat Mar 9 15:42:59 2013 -0700\n\n    Adding a simple usage statement to cairo-perf-chart\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6570581012.0, 
     6056077442.0, 
     6056427105.0, 
     6078816780.0, 
     6066270903.0, 
     6095649179.0, 
     6118189727.0, 
     6071640495.0, 
     6110192195.0, 
     6046833728.0, 
     6073990501.0, 
     6055454873.0, 
     6083463767.0, 
     6027510264.0, 
     6104285872.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6040091304.0, 
     6005701886.0, 
     6002282972.0, 
     6010932342.0, 
     6013680044.0, 
     6020135389.0, 
     6014971582.0, 
     6005830089.0, 
     5982815235.0, 
     5998508758.0, 
     6007788377.0, 
     6021463180.0, 
     6007604702.0, 
     6012052235.0, 
     6006490953.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be347acd5a198b4280f2699a1abfca241e7e610b", 
   "message": "commit be347acd5a198b4280f2699a1abfca241e7e610b\nAuthor: Matt Sealey <matt@genesi-usa.com>\nDate:   Mon Mar 11 10:24:52 2013 -0500\n\n    gitignore: negate gitignore for static pkgconfig files\n    \n    Commit 781f253 adds a rule cairo-*.*.* to .gitignore in the root dir.\n    Unfortunately this matches several src/cairo-*.pc.in files in the\n    src directory.\n    \n    The build system requires these files to be present, but the rule is\n    allowing them to be ignored. For example, when extracting a cgit\n    snapshot tarball and checking it into another git repository, these\n    files get left behind. Any accidental changes to these files will go\n    unnoticed by a 'git status' (possibly creating bad installs) and\n    any intentional changes could not be committed (git commit -a will\n    miss them, and every one will need to be forced). This is not really\n    desirable.\n    \n    We don't want to unignore *.pc.in here since there are many, many\n    autogenerated files with this name, and the cairo-*.*.* rule is in\n    general quite useful and doesn't warrant modification (although it\n    could be made a little more specific), so we just make these 4 files\n    a special case and negate the match with full filenames in src/.\n    \n    Signed-off-by: Matt Sealey <matt@genesi-usa.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6965849489.0, 
     6082094554.0, 
     6072103481.0, 
     6120320306.0, 
     6051400402.0, 
     6107686844.0, 
     6112245786.0, 
     6058122474.0, 
     6092542010.0, 
     6072299889.0, 
     6068131807.0, 
     6066297615.0, 
     6069886283.0, 
     6047707695.0, 
     6057477329.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6064146626.0, 
     6015601409.0, 
     6023102024.0, 
     6007810413.0, 
     6007423980.0, 
     6021162663.0, 
     6009736263.0, 
     6015060269.0, 
     5994294366.0, 
     6019331104.0, 
     6003479417.0, 
     6023583718.0, 
     6035311424.0, 
     6012739325.0, 
     6016182409.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ff233fd706e62edf267bee66113e2cb35183bcd9", 
   "message": "commit ff233fd706e62edf267bee66113e2cb35183bcd9\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Mon Mar 18 14:17:29 2013 -0400\n\n    [test] Set font size\n    \n    Previously this test was working because we were not scaling bitmap\n    fonts.  We do now, so adjust test.\n", 
   "nvidia-xlib": {
    "samples": [
     6582759302.0, 
     6130150752.0, 
     6083588945.0, 
     6080588954.0, 
     6059428047.0, 
     6121558906.0, 
     6105641647.0, 
     6112690160.0, 
     6107564560.0, 
     6079695992.0, 
     6073191388.0, 
     6111950473.0, 
     6090302544.0, 
     6119966035.0, 
     6090374844.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6032779718.0, 
     5998475663.0, 
     6006604090.0, 
     6025932512.0, 
     6003759631.0, 
     6025236143.0, 
     6013359910.0, 
     5996395317.0, 
     6013142417.0, 
     6025107118.0, 
     6015926708.0, 
     6003042231.0, 
     6007003659.0, 
     6006310617.0, 
     6011247723.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c", 
   "message": "commit ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Mar 20 15:10:34 2013 +0000\n\n    gl: Fix typo in gles2 shader cache lookup\n    \n    When comparing shader cache entries, it's important that we actually\n    compare the variable type hash.\n", 
   "nvidia-xlib": {
    "samples": [
     7008093544.0, 
     6090014529.0, 
     6149235797.0, 
     6051161532.0, 
     6090762581.0, 
     6268149725.0, 
     6072424143.0, 
     6067060472.0, 
     6076350602.0, 
     6088215060.0, 
     6065497319.0, 
     6081388978.0, 
     6081185408.0, 
     6077587928.0, 
     6107231269.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6081763453.0, 
     6012347423.0, 
     6035758291.0, 
     6023373097.0, 
     6058002855.0, 
     6004416251.0, 
     6006378773.0, 
     6003020179.0, 
     6012071902.0, 
     6016329349.0, 
     6024519760.0, 
     6008911179.0, 
     6005030719.0, 
     5996073454.0, 
     6016437956.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b", 
   "message": "commit 13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Thu Mar 21 16:48:43 2013 -0400\n\n    [ft] I meant fabs(), not abs()\n", 
   "nvidia-xlib": {
    "samples": [
     7081176906.0, 
     6062250568.0, 
     6045640463.0, 
     6063018721.0, 
     6083294507.0, 
     6071973170.0, 
     6090513015.0, 
     6069662696.0, 
     6052653647.0, 
     6088114665.0, 
     6091305353.0, 
     6072120259.0, 
     6091009501.0, 
     6082034326.0, 
     6065619658.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6057629333.0, 
     6020462314.0, 
     6045567818.0, 
     6033995114.0, 
     6022975011.0, 
     6004414452.0, 
     6024086581.0, 
     6033813639.0, 
     6050669379.0, 
     6016824006.0, 
     6040843913.0, 
     6006445925.0, 
     6018507348.0, 
     6069103148.0, 
     6036124283.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "caf50c07e225ee3a3e149234601e7305b1437736", 
   "message": "commit caf50c07e225ee3a3e149234601e7305b1437736\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 13:58:04 2013 +0100\n\n    test: Fix handling of dots in CAIRO_TEST_TARGET\n    \n    Before this, the following happened:\n    \n      $ CAIRO_TEST_TARGET=image,xcb-render-0.0 make test\n      Cannot find target 'image'.\n      Known targets: image, [...]\n    \n    The reason for this is that _cairo_boilerplate_target_matches_name() doesn't get\n    a null-terminated string, but instead has a pointer to the end of the string.\n    However, strpbrk() expects a null-terminated argument and thus could return a\n    result which points past the end of the input.\n    \n    This commit fixes exactly this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6789610791.0, 
     6111201440.0, 
     6045286438.0, 
     6065400701.0, 
     6099248870.0, 
     6060107572.0, 
     6047800379.0, 
     6041511089.0, 
     6137414124.0, 
     6094979362.0, 
     6111415151.0, 
     6119592338.0, 
     6054125684.0, 
     6073571814.0, 
     6101197610.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6039979846.0, 
     6012195003.0, 
     5998651908.0, 
     6017082999.0, 
     6034419528.0, 
     6022162025.0, 
     6025441526.0, 
     6041494309.0, 
     6016080559.0, 
     6019761913.0, 
     6024155000.0, 
     6029389411.0, 
     6018592816.0, 
     6019356494.0, 
     6027991286.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "b7c06fff1f597ba74fa6618766ec297d3a4bf880", 
   "message": "commit b7c06fff1f597ba74fa6618766ec297d3a4bf880\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:04:44 2013 +0100\n\n    boilerplate: rename xcb-render-0.0 to xcb-render-0_0\n    \n    The test suite uses dots to separate the backend name from the content type.\n    Thus, the backend name must not contain any dots.\n    \n    The xlib backend already calls its RENDER 0.0 target xlib-render-0_0 for this\n    reason. This commit makes the xcb backend match this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6853168229.0, 
     6059758178.0, 
     6086864925.0, 
     6060015354.0, 
     6104974189.0, 
     6080898108.0, 
     6103829145.0, 
     6144523119.0, 
     6089048342.0, 
     6043032017.0, 
     6064245434.0, 
     6097378040.0, 
     6083414707.0, 
     6052610137.0, 
     6071570946.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6044809002.0, 
     6001780693.0, 
     5997490958.0, 
     5987560341.0, 
     6011767585.0, 
     6009089376.0, 
     5966210830.0, 
     5966780083.0, 
     5975480521.0, 
     5978017286.0, 
     5993465864.0, 
     5967107995.0, 
     6000106747.0, 
     5988779415.0, 
     5999355622.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437", 
   "message": "commit 41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:14:29 2013 +0100\n\n    Fix \"make check\" standalone header check\n    \n    This fixes the following error:\n    \n    ./cairo-fixed-private.h: In function \u2018_slow_segment_intersection\u2019:\n    ./cairo-fixed-private.h:374:9: error: \u2018FALSE\u2019 undeclared (first use in this function)\n    ./cairo-fixed-private.h:374:9: note: each undeclared identifier is reported only once for each function it appears in\n    ./cairo-fixed-private.h:386:12: error: \u2018TRUE\u2019 undeclared (first use in this function)\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6511082270.0, 
     6064132222.0, 
     6077916103.0, 
     6072069545.0, 
     6066998957.0, 
     6108447308.0, 
     6113751228.0, 
     6125412404.0, 
     6048479806.0, 
     6070636401.0, 
     6054108826.0, 
     6115579994.0, 
     6081017510.0, 
     6082932692.0, 
     6056135355.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6062667130.0, 
     6021314319.0, 
     6061633432.0, 
     6023583841.0, 
     6022536992.0, 
     6011255595.0, 
     6036157640.0, 
     6031273837.0, 
     6003884712.0, 
     6031969643.0, 
     6011978348.0, 
     6024085376.0, 
     6017461355.0, 
     6042875279.0, 
     6033957025.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be5eabb66a475720020211a6d37bfeb75fc3242c", 
   "message": "commit be5eabb66a475720020211a6d37bfeb75fc3242c\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 18:19:00 2013 +0100\n\n    xcb: Clear temporary replay image in recording playback\n    \n    This gets rid of random noise that we got from the X11 server due to\n    uninitialized memory.\n    \n    Fixes: pdf-surface-source, ps-surface-source, svg-surface-source\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     6879483101.0, 
     6087341456.0, 
     6081085658.0, 
     6067332928.0, 
     6083943950.0, 
     6144938002.0, 
     6075207009.0, 
     6057219815.0, 
     6095397014.0, 
     6070597794.0, 
     6092563333.0, 
     6097989879.0, 
     6112763540.0, 
     6096000557.0, 
     6057341881.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6014090825.0, 
     5988629718.0, 
     6005698138.0, 
     6010011019.0, 
     6008206425.0, 
     6002087476.0, 
     5986212533.0, 
     6007774307.0, 
     6008995380.0, 
     6005573151.0, 
     5996445553.0, 
     6021868664.0, 
     6008701321.0, 
     5984051781.0, 
     5979552469.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "59ccc3d72e839bd897111322765bb13696a97ef5", 
   "message": "commit 59ccc3d72e839bd897111322765bb13696a97ef5\nAuthor: Nicola Fontana <ntd@entidi.it>\nDate:   Fri Mar 1 14:16:45 2013 +0100\n\n    gobject: Add wrapper around cairo_matrix_t\n    \n    Reviewed-By: Benjamin Otte <otte@redhat.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [
     7037182038.0, 
     6057027275.0, 
     6071430238.0, 
     6096712377.0, 
     6066315299.0, 
     6059800841.0, 
     6077364807.0, 
     6097968186.0, 
     6113455167.0, 
     6106149075.0, 
     6082331635.0, 
     6058839789.0, 
     6087759111.0, 
     6096948152.0, 
     6078464591.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     5977012855.0, 
     5989918736.0, 
     6006573675.0, 
     5997650535.0, 
     6010311440.0, 
     6003682154.0, 
     5981718389.0, 
     5992961473.0, 
     6012210112.0, 
     6000972673.0, 
     5959644470.0, 
     5975206979.0, 
     5985101509.0, 
     5989351984.0, 
     5982409410.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "9e0748e223cfb8c5557c73f3ab5068ec1323e7c2", 
   "message": "commit 9e0748e223cfb8c5557c73f3ab5068ec1323e7c2\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Wed Mar 27 08:08:32 2013 +1030\n\n    pdf: fix typo in bbox check\n    \n    http://lists.cairographics.org/archives/cairo/2013-March/024186.html\n", 
   "nvidia-xlib": {
    "samples": [
     7103834411.0, 
     6114820430.0, 
     6081528007.0, 
     6118633679.0, 
     6121681154.0, 
     6069783568.0, 
     6067615338.0, 
     6081946047.0, 
     6095715107.0, 
     6083414770.0, 
     6079894662.0, 
     6090777624.0, 
     6097228682.0, 
     6066751672.0, 
     6089537325.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6039983849.0, 
     6015265785.0, 
     6039233612.0, 
     6008524294.0, 
     6006399933.0, 
     5995081056.0, 
     5996665337.0, 
     6003035382.0, 
     6014062132.0, 
     5994028865.0, 
     5990542795.0, 
     5989056129.0, 
     6008352704.0, 
     5989581643.0, 
     6015611674.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fdec6b37596d8b064ff082326d7189daa8208052", 
   "message": "commit fdec6b37596d8b064ff082326d7189daa8208052\nAuthor: Michael Hutchinson <m.j.hutchinson@gmail.com>\nDate:   Fri Mar 29 02:37:33 2013 +0100\n\n    quartz: Don't release memory we don't own\n    \n    This was causing crashes due to double frees.\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=62885\n    \n    Signed-off-by: Benjamin Otte <otte@redhat.com>\n", 
   "nvidia-xlib": {
    "samples": [
     6999398890.0, 
     6063126812.0, 
     6108800885.0, 
     6102739833.0, 
     6072064898.0, 
     6099797937.0, 
     6090386155.0, 
     6063180811.0, 
     6078229579.0, 
     6080268588.0, 
     6082715964.0, 
     6094237814.0, 
     6113170806.0, 
     6091895117.0, 
     6102822559.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6048044620.0, 
     6025542839.0, 
     6023050083.0, 
     6016200603.0, 
     6013809874.0, 
     6004317426.0, 
     6029764315.0, 
     6028674119.0, 
     6000353665.0, 
     6039380114.0, 
     6005039899.0, 
     6030541519.0, 
     6039071838.0, 
     6027568533.0, 
     5993516757.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "0446fae26d35dc4e31aadc498f0f9b48b21d2c45", 
   "message": "commit 0446fae26d35dc4e31aadc498f0f9b48b21d2c45\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Mar 23 11:19:14 2013 +0000\n\n    perf: Iteratively prune outliers\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [
     6425978931.0, 
     6117491304.0, 
     6100277743.0, 
     6104864335.0, 
     6078238599.0, 
     6069933787.0, 
     6071713370.0, 
     6071269521.0, 
     6071626221.0, 
     6081142440.0, 
     6125820468.0, 
     6079321067.0, 
     6057350649.0, 
     6092182822.0, 
     6081329488.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6066022516.0, 
     6033179438.0, 
     6031764955.0, 
     6024233474.0, 
     6011600924.0, 
     6005390924.0, 
     6011534345.0, 
     6001393503.0, 
     5990915420.0, 
     6013332222.0, 
     6008283650.0, 
     5993809458.0, 
     5988353020.0, 
     6019638649.0, 
     6015184544.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "e66e9ac12e3e11af76f14e8de3cfee72d4299864", 
   "message": "commit e66e9ac12e3e11af76f14e8de3cfee72d4299864\nAuthor: Marc-Andr\u00e9 Lureau <marcandre.lureau@gmail.com>\nDate:   Tue Apr 2 00:32:56 2013 +0200\n\n    win32: fix corrupted drawing\n    \n    Fix src bitmap coordinates, which origin is bottom-left. This is\n    apparently a bug in StretchDIBits(), according to some comments on\n    MSDN API documentation.\n    \n    The backend used to have this coordinate change in the past:\n    \n                if (!StretchDIBits (dst->dc,\n                                    /* dst x,y,w,h */\n                                    dst_r.x, dst_r.y + dst_r.height - 1,\n                                    dst_r.width, - (int) dst_r.height,\n                                    /* src x,y,w,h */\n                                    src_r.x, src_extents.height - src_r.y + 1,\n                                    src_r.width, - (int) src_r.height,\n                                    src_image->data,\n                                    &bi,\n                                    DIB_RGB_COLORS,\n                                    SRCCOPY))\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=61876\n", 
   "nvidia-xlib": {
    "samples": [
     6677445215.0, 
     6099206212.0, 
     6083073586.0, 
     6086492247.0, 
     6080814219.0, 
     6113904158.0, 
     6107328472.0, 
     6085682930.0, 
     6085627913.0, 
     6053316301.0, 
     6086968697.0, 
     6059116562.0, 
     6093972597.0, 
     6086731278.0, 
     6129801333.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6036854861.0, 
     6014856402.0, 
     6043003468.0, 
     6039026650.0, 
     6040835278.0, 
     6005529960.0, 
     6021240295.0, 
     6018570086.0, 
     6053920997.0, 
     6000607071.0, 
     6050199974.0, 
     6023579599.0, 
     6018902272.0, 
     6043163282.0, 
     6047586413.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "b00b9e82ab728eaf3b87dd1113387d8e8df0d7e3", 
   "message": "commit b00b9e82ab728eaf3b87dd1113387d8e8df0d7e3\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Thu Apr 4 12:03:19 2013 -0700\n\n    boilerplate: Add a mode for running threaded perf tests\n    \n    This is useful because the GL backend runs much faster on some drivers\n    when thread awareness is disabled.\n", 
   "nvidia-xlib": {
    "samples": [
     6445810761.0, 
     6111338416.0, 
     6097805157.0, 
     6041806225.0, 
     6085137945.0, 
     6087424904.0, 
     6082574628.0, 
     6068981407.0, 
     6048371612.0, 
     6070029838.0, 
     6080416043.0, 
     6103097794.0, 
     6073892782.0, 
     6071361080.0, 
     6065096528.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6034451826.0, 
     5998487685.0, 
     5989158987.0, 
     5966842400.0, 
     6007341161.0, 
     6005462316.0, 
     5997418581.0, 
     5989542738.0, 
     5985688999.0, 
     5997437272.0, 
     6011514245.0, 
     5991947019.0, 
     5992720888.0, 
     6010389839.0, 
     6039650910.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "f6efecdfefa161c68fc5bf193a6487fc1a5047d5", 
   "message": "commit f6efecdfefa161c68fc5bf193a6487fc1a5047d5\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 29 11:09:48 2013 -0700\n\n    boilerplate/gl: Disable thread awareness\n    \n    This dramatically speeds up testing on NVidia and actually makes it\n    possible to run traces within a reasonable amount of time.\n    \n    cairo-perf-trace results for:\n    NVIDIA Corporation GeForce GTS 250/PCIe/SSE2 3.3.0 NVIDIA 310.14\n    \n    Before:\n    test              min(s)  median(s) stddev. count\n    gvim              30.924  31.251    0.72%   5/6\n    firefox-fishbowl  168.751 201.017   12.46%  8/8\n    (exited early)\n    \n    After:\n    test              min(s)  median(s) stddev. count\n    gvim              1.294   1.325     1.79%   6/6\n    firefox-fishbowl  18.540  19.104    1.54%   6/6\n", 
   "nvidia-xlib": {
    "samples": [
     6882651668.0, 
     6084174315.0, 
     6103100114.0, 
     6137048827.0, 
     6080700867.0, 
     6057190324.0, 
     6055890848.0, 
     6084616811.0, 
     6094131200.0, 
     6103803031.0, 
     6105916982.0, 
     6066972285.0, 
     6059313777.0, 
     6075473074.0, 
     6068958926.0
    ], 
    "normalization": 1000000.0
   }, 
   "nvidia-image": {
    "samples": [
     6053423098.0, 
     6025465740.0, 
     5986997783.0, 
     6017829917.0, 
     5980839446.0, 
     6005201787.0, 
     6003526696.0, 
     6018293621.0, 
     6017663444.0, 
     6034411975.0, 
     6022032812.0, 
     6017353141.0, 
     6017321648.0, 
     6010268902.0, 
     6030400114.0
    ], 
    "normalization": 1000000.0
   }
  }
 ], 
 "commitRange": "HEAD~100..", 
 "configurations": [
  "intel-xlib", 
  "intel-image", 
  "nvidia-xlib", 
  "nvidia-image"
 ]
};