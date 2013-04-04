var firefox_talos_gfx = {
 "test": "firefox-talos-gfx", 
 "results": [
  {
   "commit": "a942938e90a219a0b88153f9fa96c606ce644ef1", 
   "message": "commit a942938e90a219a0b88153f9fa96c606ce644ef1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 00:36:13 2013 +0000\n\n    scaled-font: Fix use after free when clearing the glyph cache\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "14720cd0dbc325a2140fbd5b2a7ce4b257ae5f5e", 
   "message": "commit 14720cd0dbc325a2140fbd5b2a7ce4b257ae5f5e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:11:25 2013 +0000\n\n    gstate: Use the polygon intermediate for geometry queries\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "351a9e756d0863ae7408c6d43a622620daa0c354", 
   "message": "commit 351a9e756d0863ae7408c6d43a622620daa0c354\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:31:10 2013 +0000\n\n    stroke: Flip the dev slope as well for computing the cusp on a degeneracy\n    \n    Otherwise, the join think it starts and end in exactly the same\n    direction and elimiates the round capping.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "dd20c1f4d6419238bbb37fb93a48986f83c6e6c2", 
   "message": "commit dd20c1f4d6419238bbb37fb93a48986f83c6e6c2\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:38:09 2013 +0000\n\n    xlib: map-to-image requires an extents\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "17418371b6755ef22b6d0c5787f71de3005e0730", 
   "message": "commit 17418371b6755ef22b6d0c5787f71de3005e0730\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 15:06:28 2013 +0000\n\n    xcb: _cairo_scaled_font_reset_cache does it own locking\n    \n    So we can drop ours.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d524697ede85d36e4f88fa44d6a8b884685d804b", 
   "message": "commit d524697ede85d36e4f88fa44d6a8b884685d804b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 8 17:08:52 2013 -0800\n\n    gl/msaa: No need to set the clip when masking\n    \n    After 5e9083f882859201c5df18fc870577a224f88cbb there's no need to set a\n    clip on the cairo_gl_composite_t when masking. Clips are converted to\n    traps and rendered directly when masking now.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1bcd59ef4c9dceaefa51ec6db1f5240d75940724", 
   "message": "commit 1bcd59ef4c9dceaefa51ec6db1f5240d75940724\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Jan 9 14:16:59 2013 -0800\n\n    gl/msaa: Rely on the stencil buffer to cache the clip\n    \n    When using a texture surface the depth/stencil buffer is private to\n    cairo so we can rely on the fact that any previously painted clip is\n    still valid.\n    \n    We also only scissor when there's a previously painted clip on the\n    stencil buffer, otherwise we disable the scissor test. This fixes a few\n    test cases.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "503b6b9e2ea65805a77d527c00cf242ec86d479b", 
   "message": "commit 503b6b9e2ea65805a77d527c00cf242ec86d479b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Jan 11 13:10:56 2013 +0000\n\n    xlib: Only fallback through the mask intermediate if we can composite the mask\n    \n    Before rendering into the mask, we should first check whether the\n    subsequent call to composite the mask will trigger a fallback. In that\n    case, we should fallback earlier and do the operation in place.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "7012334ebb424b619312e1fa397cc3b8a3ffd770", 
   "message": "commit 7012334ebb424b619312e1fa397cc3b8a3ffd770\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 17:20:24 2013 +0000\n\n    xlib: Handle lack of XRenderFillRectangles\n    \n    Remember to check for a supported render version before making a\n    FillRectangle request, and fallback to the core protocol where possible\n    instead.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885", 
   "message": "commit 14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:11:31 2013 +0000\n\n    compositor: Convert image surface into backend source\n    \n    Before passing a surface to the backend composite functions, they expect\n    them to be a native source. The copy'n'paste code for the mask\n    compositor forgot to perform the conversion upon the clip surfaces,\n    which originally were native to the backend and are now images.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "fd34f420ec3ba02eb39f22f6551705ab23ebfc28", 
   "message": "commit fd34f420ec3ba02eb39f22f6551705ab23ebfc28\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:16:17 2013 +0000\n\n    compositor: Pass back the internal failure\n    \n    In order to pass back a CAIRO_INT_STATUS_UNSUPPORTED, we need to use the\n    internal error surface creation functions as they do not assert on\n    private error codes.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "6639c1231072d71d33eb0952bae5f95e7480cd0d", 
   "message": "commit 6639c1231072d71d33eb0952bae5f95e7480cd0d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 22:48:30 2013 +0000\n\n    xlib: Initialise Pixmap for proxy sources\n    \n    So that we do not try to tell X to free a garbage pixmap and promptly\n    kill us.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "768b81b78eabbebb1bb443355441cac567739035", 
   "message": "commit 768b81b78eabbebb1bb443355441cac567739035\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 14 03:27:11 2013 +0000\n\n    script: Set decompression length prior to calling decompressors\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59224\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d01a502710296c9b15755f445f6fdda289a2df0b", 
   "message": "commit d01a502710296c9b15755f445f6fdda289a2df0b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 12:07:33 2013 -0800\n\n    gl/msaa: Check for more extensions before using MSAA\n    \n    The MSAA compositor is implicitly relying on the existence of several\n    OpenGL extensions. This change makes those dependencies explicit.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8", 
   "message": "commit 769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed May 2 21:54:55 2012 +0200\n\n    gl: Support for non-texture sources and masks\n    \n    If a GL surface is not a texture and is used as source or mask,\n    fall back to using an image surface as an intermediary.\n    \n    Fixes subsurface-image-repeat, subsurface-modify-child,\n    subsurface-modify-parent, subsurface-outside-target, subsurface-pad,\n    subsurface-reflect, subsurface-repeat, and subsurface-scale.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1dfea39841fc6d545e45420b1999239f29556c05", 
   "message": "commit 1dfea39841fc6d545e45420b1999239f29556c05\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 17:12:23 2013 -0800\n\n    gl: Follow up fix for the previous commit\n    \n    Handle \"fake\" surfaces created by _cairo_gl_pattern_to_source which just\n    embed a GL backend operand. These surfaces do not have a backend, so we\n    should not fall back if a surface without a backend is not a texture\n    surface.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7", 
   "message": "commit 2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:22:38 2013 +0000\n\n    1.12.10 release\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37", 
   "message": "commit ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:58:46 2013 +0000\n\n    version: Post-release bump to 1.12.11\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc", 
   "message": "commit fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 23 15:04:26 2013 +0000\n\n    xlib: Do not upload the whole image just because we want an entire row\n    \n    Fixes regression exposed by\n    \n    commit a73e7ff0186176bc82cd3ae1432c054c1fd3aebd\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Sun Jan 6 11:29:27 2013 +0000\n    \n        xlib: Simplify source creation by use of map-to-image\n    \n    but ultimately from\n    \n    commit 74941f822015cc50cd8477d0cf97f1a70dbff60b\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Wed Jan 2 22:27:55 2013 +0000\n    \n        xlib: Use SHM transport for ordinary image uploads\n    \n    Reported-by: G\u00f6k\u00e7en Eraslan <gokcen.eraslan@gmail.com>\n    Reported-by: Guillaume Ayoub <guillaume.ayoub@kozea.fr>\n    Reported-by: Emmanuel Benisty <benisty.e@gmail.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59635\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "7054c9969cb0e41845635d6658935da223899f08", 
   "message": "commit 7054c9969cb0e41845635d6658935da223899f08\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Jan 16 15:32:32 2013 +0100\n\n    gl: Don't query the display when checking if the context changed\n    \n    If display has changed, the associated context must change. A\n    context is tied a display so we can avoid this check, eliminating\n    unnecessary work during context acquisition and release.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "bb4072046016610a510373df3b67cdeb2ac1b583", 
   "message": "commit bb4072046016610a510373df3b67cdeb2ac1b583\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 11:55:10 2013 -0800\n\n    gl/msaa: Fix a memory leak in _clip_to_traps\n    \n    We need to clean up the polygon we create when decomposing a path into\n    trapezoids.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "a44b8bd70683a92d862b11c2d7359ce2b0a6a968", 
   "message": "commit a44b8bd70683a92d862b11c2d7359ce2b0a6a968\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 12:45:10 2013 -0800\n\n    gl: Fix typos in multisampling detection\n    \n    Instead of looking for the EXT_framebuffer_multisample, this code should\n    look for GL_EXT_framebuffer_multisample. GL_ARB_framebuffer_object also\n    contains all necessary API for using multisampling, so we don't need to\n    check for both it and the GL_EXT_framebuffer_blit and\n    GL_EXT_framebuffer_multisample pair.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365", 
   "message": "commit 1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 22 14:54:38 2013 -0800\n\n    gl: Use GL_ALPHA textures for CAIRO_CONTENT_ALPHA glyph caching\n    \n    It's safe to us GL_ALPHA for glyph caching surfaces, since Cairo only\n    uses them for texture uploading. This saves a little bit of memory.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "cfe0e59663c71a6ecd0c976797ac32339e363af2", 
   "message": "commit cfe0e59663c71a6ecd0c976797ac32339e363af2\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 22 20:09:01 2013 -0800\n\n    gl/msaa: Add a fast path for fills that are simple quads\n    \n    Instead of invoking Bentley-Ottman for fills that are simple\n    quadrilaterals, just pass the geometry straight to OpenGL.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "c986a7310bb06582b7d8a566d5f007ba4e5e75bf", 
   "message": "commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 24 08:55:54 2013 +0000\n\n    image: Enable inplace compositing with opacities for general routines\n    \n    On a SNB i5-2500:\n    \n    Speedups\n    ========\n             firefox-chalkboard  34284.16 -> 19637.40:  1.74x speedup\n             swfdec-giant-steps    778.35 ->   665.37:  1.17x speedup\n                      ocitysmap    485.64 ->   431.94:  1.12x speedup\n    \n    Slowdowns\n    =========\n               firefox-fishbowl  46878.98 -> 54407.14:  1.16x slowdown\n    \n    That slow down is due to overhead of the increased number of calls to\n    pixman_image_composite32() (pixman_transform_point for analyzing the\n    source extents in particular) outweighing any advantage gained by\n    performing the rasterisation in a single pass and eliding gaps. The\n    solution that has been floated in the past is for an interface into\n    pixman to only perform the analysis once and then to return a kernel to\n    use for all spans.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1d105f215a9c62f5b60541da209bf71182a2e9df", 
   "message": "commit 1d105f215a9c62f5b60541da209bf71182a2e9df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:29:44 2013 +0000\n\n    image: Fix opaque span fills\n    \n    I should have realised the previous result was too good to be true!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1ba9fb6fadcc1cb619af0ef974dffb0ff8672244", 
   "message": "commit 1ba9fb6fadcc1cb619af0ef974dffb0ff8672244\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:15:35 2013 +0000\n\n    Mark _cairo_path_is_simple_quad as private\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d9d5adec256b3935e4f261d81c37c77a2649248b", 
   "message": "commit d9d5adec256b3935e4f261d81c37c77a2649248b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:51:52 2013 +0000\n\n    image: And more fallout from c986a73, restore the absent short runs\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "3c18bae20ee2fea24d75f6986390ef8157d0207d", 
   "message": "commit 3c18bae20ee2fea24d75f6986390ef8157d0207d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 28 10:03:54 2013 +0000\n\n    perf; Do not allow the backends to optimize away the clear before sync\n    \n    The importance of writing to the scratch surface before retrieving an\n    image is that it makes that the write lands in the server queue, as well\n    as the GetImage, in order to serialise the timer against all the\n    operations.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "1d1af825bb4fcfd7c4a54b65292734ba244e096d", 
   "message": "commit 1d1af825bb4fcfd7c4a54b65292734ba244e096d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:47:48 2013 +0000\n\n    xlib/shm: Tighten mark-active to the actual CopyArea on the ShmPixmap\n    \n    Along the draw_image_boxes() upload path, we were actually marking the\n    ShmPixmap as still active for the subsequent drawing operation - which\n    could in theory never be submitted...\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "30e950515171b25d9bc3da8d535cfe05d8be69c8", 
   "message": "commit 30e950515171b25d9bc3da8d535cfe05d8be69c8\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:49:26 2013 +0000\n\n    xlib/shm: Skip creating new SHM segments if the data is already in the xserver\n    \n    If the image is already inside a SHM segment, but the image format does\n    not match the surface, fallback to the XRender paths in order to perform\n    colorspace conversion on the data already inside the Xserver.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "02a2baa8dcf49ad2d9766d43578ba216fab0d464", 
   "message": "commit 02a2baa8dcf49ad2d9766d43578ba216fab0d464\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:51:25 2013 +0000\n\n    xlib/shm: Tidy creation of the proxy source for ShmPixmaps\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "a364a106b257c4493ba7b3badacc63599ba6064a", 
   "message": "commit a364a106b257c4493ba7b3badacc63599ba6064a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:52:10 2013 +0000\n\n    xlib/shm: Tidy up destroying the mempool for a shm block\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767", 
   "message": "commit fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:00:46 2013 +0000\n\n    xlib/shm: Always request a CompletionEvent from ShmPutImage\n    \n    ...and treat is as an expected event for synchronisation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "c006b886d28a772d7a62cec52ab7e0c8196c36f6", 
   "message": "commit c006b886d28a772d7a62cec52ab7e0c8196c36f6\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:01:31 2013 +0000\n\n    xlib/shm: Force synchronisation for scratch SHM image buffers\n    \n    The scratch image buffers are used for uploads to the xserver and so we\n    must be careful not to overwrite active SHM segments. Unfortunately we\n    told the core SHM allocator that we would sync before using the images,\n    which was a lie.\n    \n    Reported-by: Michael Natterer <mitch@gimp.org>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "9b92625151ca75a6ee10f231f83b53f67a371947", 
   "message": "commit 9b92625151ca75a6ee10f231f83b53f67a371947\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:49:56 2013 +0000\n\n    xlib/shm: Simplify uploading of SHM image data\n    \n    Make sure that we simply copy from the SHM segment into the target\n    drawable, and not inadvertently stage it through another SHM buffer.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "41ae904461e344fbfa3be3d276a7102bb4304b19", 
   "message": "commit 41ae904461e344fbfa3be3d276a7102bb4304b19\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:52:02 2013 +0000\n\n    xlib/shm: Appease the compiler for a 'maybe used uninitialised' variable\n    \n    Initialise shm during its declaration so that it is indeed initialised\n    for the cleanup after every path.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "74a19c527c1fa07ade2042a8d2acecbb5f6ccab1", 
   "message": "commit 74a19c527c1fa07ade2042a8d2acecbb5f6ccab1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 10:31:05 2013 +0000\n\n    configure: Include X11.h before testing for usability of Xrender.h\n    \n    On Solaris at least, the Xrender.h header is not standalone and requires\n    X11/X.h to be included first to define the essential types.\n    \n    Reported-by: Andreas F. Borchert <bugzilla@andreas-borchert.de>\n    Bugzilla; https://bugs.freedesktop.org/show_bug.cgi?id=58199\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "89092b97b50a7740058d0f72f94dfc6defe15ed6", 
   "message": "commit 89092b97b50a7740058d0f72f94dfc6defe15ed6\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 13:21:00 2013 -0800\n\n    gl/msaa: Don't emit alpha when emitting vertices\n    \n    The color attribute is disabled when not in spans mode, so the emitted\n    alpha is simply overwritten by the next vertex. Additionally, this can\n    potentially cause the alpha to be written past the end of the buffer.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "91834fbdee40f46e18d071fd2671a7a642e6aa86", 
   "message": "commit 91834fbdee40f46e18d071fd2671a7a642e6aa86\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 22:12:00 2013 +0000\n\n    xlib/shm: Clarify testing of seqno\n    \n    Rename the seqno tests into seqno_passed(), seqno_before() and\n    seqno_after() in order to clarify their semantics.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "2560c0b6577a6380ef175cf18bb804913784632c", 
   "message": "commit 2560c0b6577a6380ef175cf18bb804913784632c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 23:51:44 2013 +0000\n\n    xlib/shm: More clarification of seqno required\n    \n    Everytime I read the predicate wrong, but hopefully, this time I have it\n    right!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "ec58fde294afd52c89fa5ed21ba2611edfdbd550", 
   "message": "commit ec58fde294afd52c89fa5ed21ba2611edfdbd550\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:06:48 2013 +0000\n\n    perf: Synchronize before stopping the timers\n    \n    Fixes a regression from\n    \n    commit 2855ff4666922f2c38505414270d47f659b0d499\n    Author: Andrea Canciani <ranma42@gmail.com>\n    Date:   Wed Aug 31 16:42:03 2011 +0200\n    \n        perf: Reuse cairo-time\n    \n    which dropped the essential call to synchronize when refactoring the\n    code.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f", 
   "message": "commit 22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:19:53 2013 +0000\n\n    image: Add a reference for the clone's parent image\n    \n    We use the parent as a flag during map-to-image/umap-image that the\n    resultant image came from a fallback rather than as direct call\n    to the backend's map_to_image(). Whilst we use it as a simple flag,\n    we need to make sure the parent surface obeys the reference counting\n    semantics and is consistent for all callers.\n    \n    Unlike other users of the parent pointer, there is no resource sharing\n    between the two surfaces.\n    \n    Reported-by: Henry Song <henry.song@samsung.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "350f9fb5366079113eb8bca947d480362c3ae6be", 
   "message": "commit 350f9fb5366079113eb8bca947d480362c3ae6be\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:15:03 2013 +0000\n\n    test: Refresh refs for aa noise following reduction of the 2-stage compositing\n    \n    A side effect of\n    \n    commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Thu Jan 24 08:55:54 2013 +0000\n    \n        image: Enable inplace compositing with opacities for general routines\n    \n    is that we should in theory be reducing the rounding errors when\n    compositing coverage.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "a201a1169f472e822a66275b7dffe62f241d8ec0", 
   "message": "commit a201a1169f472e822a66275b7dffe62f241d8ec0\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:24:33 2013 +0000\n\n    1.12.12 release\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "28dbafd5643fcf637a556fc196b5b984d44d151d", 
   "message": "commit 28dbafd5643fcf637a556fc196b5b984d44d151d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 16:23:24 2013 +0000\n\n    Post release version bump to 1.12.13\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "15830fdb1087f18dcd6351de1034a5025b8ed343", 
   "message": "commit 15830fdb1087f18dcd6351de1034a5025b8ed343\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 18:50:39 2013 +0000\n\n    NEWS: fix a couple of typos\n    \n    Reported-by: Thierry Vignaud\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "c391093f40472c2300f38d0e5857858f85586b60", 
   "message": "commit c391093f40472c2300f38d0e5857858f85586b60\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 1 16:31:49 2013 +0000\n\n    image: Add a convenience function for creating an image from another's data\n    \n    The GL backend would like to extract a rectangle from another surface\n    and convert it to a different pixel format. The\n    _cairo_image_surface_create_from_image() does that by returning a new\n    image that has the contents of the specified rectangle in the source\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "18cff63e3d288bf2d7773760f2ab25c80a4a2bc1", 
   "message": "commit 18cff63e3d288bf2d7773760f2ab25c80a4a2bc1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent writes to the user-data arrays during teardown\n    \n    As we cleanup the user-data arrays, we call the user provided destroy\n    notifier callbacks. These callbacks are at liberty to write back into\n    the parent surface, and in particular try to write into the arrays that\n    we have just freed. This causes hard to control and fairly unpredictable\n    use-after-frees in the client, so lets just rule out the dangerous\n    behaviour.\n    \n    References:https://bugzilla.mozilla.org/show_bug.cgi?id=722975\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "10110d58cee179cded8e4c4ff8a8d02c477585bd", 
   "message": "commit 10110d58cee179cded8e4c4ff8a8d02c477585bd\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent reads from the user-data arrays during teardown\n    \n    In a similar fashion to the previous commit, we also need to be wary of\n    users simply trying to read from a potentially freed user-data array.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d15a71f128c73ce1da19e6ff5a4e2fe044b58749", 
   "message": "commit d15a71f128c73ce1da19e6ff5a4e2fe044b58749\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 12:51:13 2013 +0000\n\n    qt: Update for fallback compositor\n    \n    We now need to explicitly manage fallbacks and to provide an\n    implementation for map-to-image/unmap-image.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "05ad89f91241b386f72f5b9bac3ebe62faff1d1b", 
   "message": "commit 05ad89f91241b386f72f5b9bac3ebe62faff1d1b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 16:51:35 2013 +0000\n\n    gl: Replace manual vertex transformation with VS computation of texcoords\n    \n    Not only is our point transformation code is quite slow (well at least\n    compared to a real GPU), but by deriving the texture coordinates from\n    the vertex position we can elide the multiple arrays that we need to\n    construct and pass to GL - improving performance by eliminating CPU\n    overhead from needless transforms and data shovelling.\n    \n    However, not all vertex emission is suitable. For instance, for glyphs\n    we need to emit discontiguous texture coordinates for each glyph, but\n    span generation is suitable - which fortuitously also has the largest\n    vertex density and so benefits the most.\n    \n    The only real concern is for hardware without true vertex shader support\n    (e.g. i915) but there we are already invoking the VS to transform the\n    vertex into the viewport. We would need to eliminate that transform as\n    well as manually compute the texture coordinates in order to eliminate\n    the vertex recomputation pass.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "260c16331a2c7bedbcf35d7f2cbab2f1f4098c87", 
   "message": "commit 260c16331a2c7bedbcf35d7f2cbab2f1f4098c87\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Feb 4 10:43:13 2013 +0000\n\n    gl: Include the vertex ident in the shader cache hash\n    \n    As we may specialise the vertex program depending upon details of the\n    fragment shader, and may have more than one program for the same\n    combination of fragment sources, we need to include the vertex tag in\n    the cache entry.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "4cb181d985adbbf79e80ff695adc908810b41544", 
   "message": "commit 4cb181d985adbbf79e80ff695adc908810b41544\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:53:38 2013 +0000\n\n    gl: do not force flush everytime uploading a glyph image to glyph cache\n    \n    In normal cases, we want to flush pending operations reading from the\n    texture before modifying its contents.  However during uploading of\n    glyphs into the glyph cache, we repeatedly modify the texture as we\n    construct the vbo (whilst referencing it for that operation). We track\n    unused areas in the glyph cache so that if we run out of space, we can\n    explicitly flush the pending glyphs and start afresh and avoid having to\n    flush the operation in common case.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "7bee1962f601009c507f987838de1a9dec3d9334", 
   "message": "commit 7bee1962f601009c507f987838de1a9dec3d9334\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 5 21:57:52 2013 +1030\n\n    type1-subset: in latin subsets replace glyph names with standard names\n    \n    When using WinAnsiEncoding in PDF the glyphs are keyed by glyph\n    name. We need to ensure the correct names are used and can't assume\n    the glyph names in the font are correct.\n    \n    Bug 60248\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "400ea9c2905461067df9e6d27c2e961d47f04676", 
   "message": "commit 400ea9c2905461067df9e6d27c2e961d47f04676\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Feb 6 12:53:14 2013 -0800\n\n    gl/msaa: Properly fall back when using CLEAR operator\n    \n    There are some situations that the MSAA compositor doesn't support using\n    the CLEAR operator. We should properly fall back in those cases.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "4b54c09c056e5dee65f2cf4e87835eb9127e5b1c", 
   "message": "commit 4b54c09c056e5dee65f2cf4e87835eb9127e5b1c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Feb 6 22:16:12 2013 +0000\n\n    image: Substitute OVER spans for SOURCE with an opaque pattern\n    \n    Based on an idea from Ravi Nanjundappa\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "4b6b28b5e8b9020c72a60b01ff3340a70dd59478", 
   "message": "commit 4b6b28b5e8b9020c72a60b01ff3340a70dd59478\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 10:00:47 2013 +0000\n\n    win32: Fix is_win98()\n    \n    Since the translation into a separate function, its condition was\n    reversed: that is almost everybody thought they were on a win98 machine\n    and so had no working AlphaBlend().\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "562cc8227feb99b75fb53df7800df66887be129d", 
   "message": "commit 562cc8227feb99b75fb53df7800df66887be129d\nAuthor: Ravi Nanjundappa <ravi.nanjundappa@gmail.com>\nDate:   Mon Feb 6 10:56:55 2012 +0530\n\n    gl/spans: Handle SOURCE operations with opaque sources.\n    \n    SOURCE operations with an opaque are equivalent to OVER.\n    This can prevent us from falling back in certain cases.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "607a15db5df04d10e5be6d06599ec4e9d98d2446", 
   "message": "commit 607a15db5df04d10e5be6d06599ec4e9d98d2446\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 21:40:30 2013 +0000\n\n    gl: Mark up _cairo_gl_composite_set_operator* as private\n    \n    Add the cairo_private markup to hide the PLT entries and to keep make\n    check happy.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa", 
   "message": "commit 8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:10:25 2013 +0000\n\n    polygon: Only rely on the computed boundary intersections for crossing edges\n    \n    If we need to extrapolate the edge to the boundary, then we run the risk\n    of an overflow for an immaterial result. So if the edge does not cross\n    the boundary, we can simply use the corresponding end-point and not emit\n    the boundary segment.\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60489\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "ea16302e45ced56e6f12b8520e9f530e1ffc68c4", 
   "message": "commit ea16302e45ced56e6f12b8520e9f530e1ffc68c4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:22:01 2013 +0000\n\n    polygon: Avoid computing the unused intersection coordinates\n    \n    If we only ignore the result of the computed boundary intersection,\n    because the edge is inside that boundary, then we can simply forgo the\n    calculation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "2d7ac9e737f37daf8490c27e6a04c65bba642645", 
   "message": "commit 2d7ac9e737f37daf8490c27e6a04c65bba642645\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 15:19:14 2013 +0000\n\n    xlib: Only apply the dst offset to the glyph strings once\n    \n    The elts offset is a delta from the previous glyph coordinate. So by\n    subtracting the dst origin everytime, we were accumulating a glyph\n    position error. Instead we just want to offset the starting coordinate\n    and then always use relative positions.\n    \n    Reported-by: Theo Veenker <T.J.G.Veenker@uu.nl>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d4651676e1496f0354acb0ef045e8b65601edf6d", 
   "message": "commit d4651676e1496f0354acb0ef045e8b65601edf6d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 22:17:13 2013 +0000\n\n    win32: Clear the similar-image before returning to the user\n    \n    Our userspace API mandates that surfaces created for the user are\n    cleared before they are returned. Make it so for the win32 similar image\n    constructor.\n    \n    Reported-by: Michael Henning <drawoc@darkrefraction.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60519\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "93ddc3a28308bcd9e062178ceb453f26e9228fc4", 
   "message": "commit 93ddc3a28308bcd9e062178ceb453f26e9228fc4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:13:31 2013 +0000\n\n    tests: Update reference images after adjustments to polygon line clipping\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "0dac37c41473deafa4a2f154187c5c3d08b07c91", 
   "message": "commit 0dac37c41473deafa4a2f154187c5c3d08b07c91\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:38:28 2013 +0000\n\n    1.12.14 release\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "7f3cca458a7546f913533f693b581325228aba4e", 
   "message": "commit 7f3cca458a7546f913533f693b581325228aba4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 14:18:47 2013 +0000\n\n    Post release version bump to 1.12.15\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "14237f11439831377b59e8ea5717de5dd3e19e73", 
   "message": "commit 14237f11439831377b59e8ea5717de5dd3e19e73\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:11:12 2013 +0000\n\n    spans: Mark the surface as cleared in preparing for recording surface playback\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "be1561dadece6e947a3ca78d1124197b4278ce96", 
   "message": "commit be1561dadece6e947a3ca78d1124197b4278ce96\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:24:08 2013 +0000\n\n    recording: Avoid indirection through indices array if not reduced\n    \n    If we don't discard any elements, then the index array is simply a 1:1\n    mapping of the element array, and we may as well bypass it.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "a09b7c79278465ee1ad916697e0153eae640d8df", 
   "message": "commit a09b7c79278465ee1ad916697e0153eae640d8df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:25:03 2013 +0000\n\n    path: Fix bbox computation for negative scale factors\n    \n    The fast path for transforming a path by a simple scale factor, forgot\n    to fix up the orientation of the box if that scale factor was negative.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "02b467a28703a0bd68b92fb26f7905bf6a25bf7d", 
   "message": "commit 02b467a28703a0bd68b92fb26f7905bf6a25bf7d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:46:42 2013 +0000\n\n    test: Exercise replaying a recording surface through a flip matrix\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "41e646e019911f8e566e4f9963036117750f862f", 
   "message": "commit 41e646e019911f8e566e4f9963036117750f862f\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:30:25 2013 +0000\n\n    gl: disable GL_DITHER\n    \n    GL_DITHER is enabled by default by spec. Leaving GL_DITHER enabled\n    causes color pixel mismatch on some drivers by comparing uploading then\n    readPixels and original image.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "fb1abbc4bc25c541cfb1084012a6a185c541c340", 
   "message": "commit fb1abbc4bc25c541cfb1084012a6a185c541c340\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 15 14:04:21 2013 +0000\n\n    win32: Free the fallback upon finish\n    \n    Zoz\u00f3 Teki pointed out that we leak the fallback surface upon finish in\n    case it was active at the time as the preceding flush would only clear\n    the damage and not decouple the fallback surface.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "e7e1ac235ff94d184d88c8c206b81343822f6a4e", 
   "message": "commit e7e1ac235ff94d184d88c8c206b81343822f6a4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 19 09:54:24 2013 +0000\n\n    image: Compare against the true size of the embedded buffer\n    \n    When querying whether the run is small enough to fit inside the\n    pre-allocated temporary buffer, we need to avoid comparing against\n    sizeof(buf) as buf is a variable length array and so sizeof() is\n    meaningless.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "446a3dc5c0298e35b9a1e38460bc3804ab6e01ce", 
   "message": "commit 446a3dc5c0298e35b9a1e38460bc3804ab6e01ce\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 19 20:59:16 2013 +1030\n\n    pdf: add missing 'endobj' to shading dict\n    \n    https://bugs.launchpad.net/ubuntu/+source/libcairo/+bug/1051939\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "7658eced9a45f42033c2b0b45cee70f6edb6ff20", 
   "message": "commit 7658eced9a45f42033c2b0b45cee70f6edb6ff20\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 24 17:07:54 2013 +0000\n\n    xlib: Fix invocation of XRenderFindFormat()\n    \n    The 'count' parameter is an indication to libXrender of the number of\n    matches to skip before reporting (rather than a limit on the number to\n    report). As we only want the first match, always pass 0.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "4f00d2344c84a1017a1e7d76ccb2fa552c80a969", 
   "message": "commit 4f00d2344c84a1017a1e7d76ccb2fa552c80a969\nAuthor: Jana Saout <jana@saout.de>\nDate:   Fri Mar 1 20:10:28 2013 +1030\n\n    pdf: Fix crash\n    \n    Bug 61451\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "a8f1b456db744e33a10b2301df03528787e5b1ca", 
   "message": "commit a8f1b456db744e33a10b2301df03528787e5b1ca\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Fri Mar 8 06:21:59 2013 -0500\n\n    [FT] Prefer downscaling bitmap glyphs to upscaling\n    \n    Say, you have bitmap strikes for sizes 50ppem and 100ppem.\n    To render at 60ppem, it's much better to downscale the 100ppem\n    bitmap than upscale 50ppem one.  Prefer downscaling.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "524e6fd3e82d952dfa850b832238a1f4f9ccb8bb", 
   "message": "commit 524e6fd3e82d952dfa850b832238a1f4f9ccb8bb\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Thu Mar 7 16:33:27 2013 +0000\n\n    gl: Export query for EGLContext and EGLDisplay from device\n    \n    Similar to glx, add query for the EGLContext and EGLDisplay to egl-based\n    cairo devices.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "f50ced2e7b4b2f4601dc9b9edf1a861401c302e4", 
   "message": "commit f50ced2e7b4b2f4601dc9b9edf1a861401c302e4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Mar 8 14:25:26 2013 +0000\n\n    gl: Fix typo s/bool/cairo_bool_t/\n    \n    One quickly gets used to having stdbool.h available.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "5ee136b2c067c92e85f04ba0c84966f7760f4556", 
   "message": "commit 5ee136b2c067c92e85f04ba0c84966f7760f4556\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 8 10:29:55 2013 -0800\n\n    gl: Setup operands when the vertex size changes\n    \n    Previously _cairo_gl_composite_setup_vbo was overwriting the old context\n    vertex_size, while _cairo_gl_context_setup_operand was relying on it to\n    determine if the vertex size changed. Instead of a fragile ordering of\n    statements, pass whether the vertex size changed as an argument to enforce\n    the calling order via method parameters.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "c60e23feb16a8745eaa6d213a89f61ded5707731", 
   "message": "commit c60e23feb16a8745eaa6d213a89f61ded5707731\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Mar 13 17:19:19 2013 -0700\n\n    path: Fix a bug in line intersection\n    \n    Before the intersection code was not taking into account that both\n    quotients are required to be in the range (0,1) for the segments to\n    intersect or handling the case of negative numerators and denominators.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "aadece05fb1cf80f0a1138368f4664e878a59204", 
   "message": "commit aadece05fb1cf80f0a1138368f4664e878a59204\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:16:01 2013 -0700\n\n    stroke: Fix large line widths for fallback stroke shaper\n    \n    Fix the test case line-width-tolerance for the fallback stroke shaper.\n    Instead of drawing quads between spline points, draw triangle based on\n    the actual spline edges. This roughly follows the approach of the\n    tristrip and polygonal shapers.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "2c2dccf5a4d298c866f7c0faed2e10c65252c168", 
   "message": "commit 2c2dccf5a4d298c866f7c0faed2e10c65252c168\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:17:19 2013 -0700\n\n    stroke: Use round-joins near inflection points of splines\n    \n    Similar to b7bd5ae4f3da44131261711bb236cd7aa24a3ae3, but applied to the\n    fallback stroke shaper.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "01a8bf01c6508a4fea8d40371c3049e7a2f7908a", 
   "message": "commit 01a8bf01c6508a4fea8d40371c3049e7a2f7908a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Mar 15 09:08:00 2013 +0000\n\n    mempool: Reduce an assert into an error return for get_buddy()\n    \n    If we ask for a buddy that is outside of our allocation that is an\n    error that should not happen with a power-of-two allocated zone...\n    However, since it has been seen in the wild, we can safely return that\n    there is no buddy rather than die in a too-late assert.\n    \n    Reported-by: Anton Eliasson <devel@antoneliasson.se>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "c141615a7fa632a2435b49f3949ed1fc9962af1f", 
   "message": "commit c141615a7fa632a2435b49f3949ed1fc9962af1f\nAuthor: Marek Kasik <mkasik@redhat.com>\nDate:   Fri Mar 15 14:46:19 2013 +0100\n\n    cff-subset: Fix allocation of width arrays\n    \n    fd_default_width and fd_nominal_width\n    are arrays of doubles not arrays of ints.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "592f5944239debfa3dacc410f675261947156baf", 
   "message": "commit 592f5944239debfa3dacc410f675261947156baf\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 15 16:53:28 2013 +0100\n\n    test: Fix CAIRO_REF_DIR\n    \n    Ever since the test output was moved from test/ to test/output/, using\n    CAIRO_REF_DIR to make the test suite succeed no longer works. The test suite was\n    looking for the wrong file names.\n    \n    This patch makes this work again. However, I am not sure that this really is the\n    correct fix. It just seems to work. :-)\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "0e999edff869bc08522a6a56c69efa9b5e1c33b5", 
   "message": "commit 0e999edff869bc08522a6a56c69efa9b5e1c33b5\nAuthor: Matthew Fischer <matthew.fischer@canonical.com>\nDate:   Sat Mar 9 15:42:59 2013 -0700\n\n    Adding a simple usage statement to cairo-perf-chart\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "be347acd5a198b4280f2699a1abfca241e7e610b", 
   "message": "commit be347acd5a198b4280f2699a1abfca241e7e610b\nAuthor: Matt Sealey <matt@genesi-usa.com>\nDate:   Mon Mar 11 10:24:52 2013 -0500\n\n    gitignore: negate gitignore for static pkgconfig files\n    \n    Commit 781f253 adds a rule cairo-*.*.* to .gitignore in the root dir.\n    Unfortunately this matches several src/cairo-*.pc.in files in the\n    src directory.\n    \n    The build system requires these files to be present, but the rule is\n    allowing them to be ignored. For example, when extracting a cgit\n    snapshot tarball and checking it into another git repository, these\n    files get left behind. Any accidental changes to these files will go\n    unnoticed by a 'git status' (possibly creating bad installs) and\n    any intentional changes could not be committed (git commit -a will\n    miss them, and every one will need to be forced). This is not really\n    desirable.\n    \n    We don't want to unignore *.pc.in here since there are many, many\n    autogenerated files with this name, and the cairo-*.*.* rule is in\n    general quite useful and doesn't warrant modification (although it\n    could be made a little more specific), so we just make these 4 files\n    a special case and negate the match with full filenames in src/.\n    \n    Signed-off-by: Matt Sealey <matt@genesi-usa.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "ff233fd706e62edf267bee66113e2cb35183bcd9", 
   "message": "commit ff233fd706e62edf267bee66113e2cb35183bcd9\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Mon Mar 18 14:17:29 2013 -0400\n\n    [test] Set font size\n    \n    Previously this test was working because we were not scaling bitmap\n    fonts.  We do now, so adjust test.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c", 
   "message": "commit ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Mar 20 15:10:34 2013 +0000\n\n    gl: Fix typo in gles2 shader cache lookup\n    \n    When comparing shader cache entries, it's important that we actually\n    compare the variable type hash.\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b", 
   "message": "commit 13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Thu Mar 21 16:48:43 2013 -0400\n\n    [ft] I meant fabs(), not abs()\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "caf50c07e225ee3a3e149234601e7305b1437736", 
   "message": "commit caf50c07e225ee3a3e149234601e7305b1437736\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 13:58:04 2013 +0100\n\n    test: Fix handling of dots in CAIRO_TEST_TARGET\n    \n    Before this, the following happened:\n    \n      $ CAIRO_TEST_TARGET=image,xcb-render-0.0 make test\n      Cannot find target 'image'.\n      Known targets: image, [...]\n    \n    The reason for this is that _cairo_boilerplate_target_matches_name() doesn't get\n    a null-terminated string, but instead has a pointer to the end of the string.\n    However, strpbrk() expects a null-terminated argument and thus could return a\n    result which points past the end of the input.\n    \n    This commit fixes exactly this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "b7c06fff1f597ba74fa6618766ec297d3a4bf880", 
   "message": "commit b7c06fff1f597ba74fa6618766ec297d3a4bf880\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:04:44 2013 +0100\n\n    boilerplate: rename xcb-render-0.0 to xcb-render-0_0\n    \n    The test suite uses dots to separate the backend name from the content type.\n    Thus, the backend name must not contain any dots.\n    \n    The xlib backend already calls its RENDER 0.0 target xlib-render-0_0 for this\n    reason. This commit makes the xcb backend match this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437", 
   "message": "commit 41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:14:29 2013 +0100\n\n    Fix \"make check\" standalone header check\n    \n    This fixes the following error:\n    \n    ./cairo-fixed-private.h: In function \u2018_slow_segment_intersection\u2019:\n    ./cairo-fixed-private.h:374:9: error: \u2018FALSE\u2019 undeclared (first use in this function)\n    ./cairo-fixed-private.h:374:9: note: each undeclared identifier is reported only once for each function it appears in\n    ./cairo-fixed-private.h:386:12: error: \u2018TRUE\u2019 undeclared (first use in this function)\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "be5eabb66a475720020211a6d37bfeb75fc3242c", 
   "message": "commit be5eabb66a475720020211a6d37bfeb75fc3242c\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 18:19:00 2013 +0100\n\n    xcb: Clear temporary replay image in recording playback\n    \n    This gets rid of random noise that we got from the X11 server due to\n    uninitialized memory.\n    \n    Fixes: pdf-surface-source, ps-surface-source, svg-surface-source\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "59ccc3d72e839bd897111322765bb13696a97ef5", 
   "message": "commit 59ccc3d72e839bd897111322765bb13696a97ef5\nAuthor: Nicola Fontana <ntd@entidi.it>\nDate:   Fri Mar 1 14:16:45 2013 +0100\n\n    gobject: Add wrapper around cairo_matrix_t\n    \n    Reviewed-By: Benjamin Otte <otte@redhat.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "9e0748e223cfb8c5557c73f3ab5068ec1323e7c2", 
   "message": "commit 9e0748e223cfb8c5557c73f3ab5068ec1323e7c2\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Wed Mar 27 08:08:32 2013 +1030\n\n    pdf: fix typo in bbox check\n    \n    http://lists.cairographics.org/archives/cairo/2013-March/024186.html\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "fdec6b37596d8b064ff082326d7189daa8208052", 
   "message": "commit fdec6b37596d8b064ff082326d7189daa8208052\nAuthor: Michael Hutchinson <m.j.hutchinson@gmail.com>\nDate:   Fri Mar 29 02:37:33 2013 +0100\n\n    quartz: Don't release memory we don't own\n    \n    This was causing crashes due to double frees.\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=62885\n    \n    Signed-off-by: Benjamin Otte <otte@redhat.com>\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
   }
  }, 
  {
   "commit": "d35e5e2bc75ddf2046c91dc0b3f40d406bab8850", 
   "message": "commit d35e5e2bc75ddf2046c91dc0b3f40d406bab8850\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 29 11:09:48 2013 -0700\n\n    boilerplate/gl: Disable thread awareness\n    \n    This dramatically speeds up testing on NVidia and actually makes it\n    possible to run traces within a reasonable amount of time.\n    \n    cairo-perf-trace results for:\n    NVIDIA Corporation GeForce GTS 250/PCIe/SSE2 3.3.0 NVIDIA 310.14\n    \n    Before:\n    test              min(s)  median(s) stddev. count\n    gvim              30.924  31.251    0.72%   5/6\n    firefox-fishbowl  168.751 201.017   12.46%  8/8\n    (exited early)\n    \n    After:\n    test              min(s)  median(s) stddev. count\n    gvim              1.294   1.325     1.79%   6/6\n    firefox-fishbowl  18.540  19.104    1.54%   6/6\n", 
   "nvidia-xlib": {
    "samples": [], 
    "normalization": 1
   }, 
   "nvidia-image": {
    "samples": [], 
    "normalization": 1
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