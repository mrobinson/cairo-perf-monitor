var gvim = {
 "test": "gvim", 
 "backends": [
  "xlib", 
  "image"
 ], 
 "commitRange": "HEAD~100..", 
 "results": [
  {
   "commit": "a942938e90a219a0b88153f9fa96c606ce644ef1", 
   "message": "commit a942938e90a219a0b88153f9fa96c606ce644ef1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 00:36:13 2013 +0000\n\n    scaled-font: Fix use after free when clearing the glyph cache\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "14720cd0dbc325a2140fbd5b2a7ce4b257ae5f5e", 
   "message": "commit 14720cd0dbc325a2140fbd5b2a7ce4b257ae5f5e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:11:25 2013 +0000\n\n    gstate: Use the polygon intermediate for geometry queries\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "351a9e756d0863ae7408c6d43a622620daa0c354", 
   "message": "commit 351a9e756d0863ae7408c6d43a622620daa0c354\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:31:10 2013 +0000\n\n    stroke: Flip the dev slope as well for computing the cusp on a degeneracy\n    \n    Otherwise, the join think it starts and end in exactly the same\n    direction and elimiates the round capping.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "dd20c1f4d6419238bbb37fb93a48986f83c6e6c2", 
   "message": "commit dd20c1f4d6419238bbb37fb93a48986f83c6e6c2\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 12:38:09 2013 +0000\n\n    xlib: map-to-image requires an extents\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "17418371b6755ef22b6d0c5787f71de3005e0730", 
   "message": "commit 17418371b6755ef22b6d0c5787f71de3005e0730\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 9 15:06:28 2013 +0000\n\n    xcb: _cairo_scaled_font_reset_cache does it own locking\n    \n    So we can drop ours.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "d524697ede85d36e4f88fa44d6a8b884685d804b", 
   "message": "commit d524697ede85d36e4f88fa44d6a8b884685d804b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 8 17:08:52 2013 -0800\n\n    gl/msaa: No need to set the clip when masking\n    \n    After 5e9083f882859201c5df18fc870577a224f88cbb there's no need to set a\n    clip on the cairo_gl_composite_t when masking. Clips are converted to\n    traps and rendered directly when masking now.\n"
  }, 
  {
   "commit": "1bcd59ef4c9dceaefa51ec6db1f5240d75940724", 
   "message": "commit 1bcd59ef4c9dceaefa51ec6db1f5240d75940724\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Jan 9 14:16:59 2013 -0800\n\n    gl/msaa: Rely on the stencil buffer to cache the clip\n    \n    When using a texture surface the depth/stencil buffer is private to\n    cairo so we can rely on the fact that any previously painted clip is\n    still valid.\n    \n    We also only scissor when there's a previously painted clip on the\n    stencil buffer, otherwise we disable the scissor test. This fixes a few\n    test cases.\n"
  }, 
  {
   "commit": "503b6b9e2ea65805a77d527c00cf242ec86d479b", 
   "message": "commit 503b6b9e2ea65805a77d527c00cf242ec86d479b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Jan 11 13:10:56 2013 +0000\n\n    xlib: Only fallback through the mask intermediate if we can composite the mask\n    \n    Before rendering into the mask, we should first check whether the\n    subsequent call to composite the mask will trigger a fallback. In that\n    case, we should fallback earlier and do the operation in place.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "7012334ebb424b619312e1fa397cc3b8a3ffd770", 
   "message": "commit 7012334ebb424b619312e1fa397cc3b8a3ffd770\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 17:20:24 2013 +0000\n\n    xlib: Handle lack of XRenderFillRectangles\n    \n    Remember to check for a supported render version before making a\n    FillRectangle request, and fallback to the core protocol where possible\n    instead.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885", 
   "message": "commit 14c32ee1cf6bfcaeb07d50a80b6d5a388a1f2885\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:11:31 2013 +0000\n\n    compositor: Convert image surface into backend source\n    \n    Before passing a surface to the backend composite functions, they expect\n    them to be a native source. The copy'n'paste code for the mask\n    compositor forgot to perform the conversion upon the clip surfaces,\n    which originally were native to the backend and are now images.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "fd34f420ec3ba02eb39f22f6551705ab23ebfc28", 
   "message": "commit fd34f420ec3ba02eb39f22f6551705ab23ebfc28\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 18:16:17 2013 +0000\n\n    compositor: Pass back the internal failure\n    \n    In order to pass back a CAIRO_INT_STATUS_UNSUPPORTED, we need to use the\n    internal error surface creation functions as they do not assert on\n    private error codes.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "6639c1231072d71d33eb0952bae5f95e7480cd0d", 
   "message": "commit 6639c1231072d71d33eb0952bae5f95e7480cd0d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 13 22:48:30 2013 +0000\n\n    xlib: Initialise Pixmap for proxy sources\n    \n    So that we do not try to tell X to free a garbage pixmap and promptly\n    kill us.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "768b81b78eabbebb1bb443355441cac567739035", 
   "message": "commit 768b81b78eabbebb1bb443355441cac567739035\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 14 03:27:11 2013 +0000\n\n    script: Set decompression length prior to calling decompressors\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59224\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "d01a502710296c9b15755f445f6fdda289a2df0b", 
   "message": "commit d01a502710296c9b15755f445f6fdda289a2df0b\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 12:07:33 2013 -0800\n\n    gl/msaa: Check for more extensions before using MSAA\n    \n    The MSAA compositor is implicitly relying on the existence of several\n    OpenGL extensions. This change makes those dependencies explicit.\n"
  }, 
  {
   "commit": "769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8", 
   "message": "commit 769ea3b2c757adc9f8f348fdc93bb46f35c2f6b8\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed May 2 21:54:55 2012 +0200\n\n    gl: Support for non-texture sources and masks\n    \n    If a GL surface is not a texture and is used as source or mask,\n    fall back to using an image surface as an intermediary.\n    \n    Fixes subsurface-image-repeat, subsurface-modify-child,\n    subsurface-modify-parent, subsurface-outside-target, subsurface-pad,\n    subsurface-reflect, subsurface-repeat, and subsurface-scale.\n"
  }, 
  {
   "commit": "1dfea39841fc6d545e45420b1999239f29556c05", 
   "message": "commit 1dfea39841fc6d545e45420b1999239f29556c05\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 15 17:12:23 2013 -0800\n\n    gl: Follow up fix for the previous commit\n    \n    Handle \"fake\" surfaces created by _cairo_gl_pattern_to_source which just\n    embed a GL backend operand. These surfaces do not have a backend, so we\n    should not fall back if a surface without a backend is not a texture\n    surface.\n"
  }, 
  {
   "commit": "2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7", 
   "message": "commit 2d6204c67d4d0d9c5d03087c4c1609a81ef1fdb7\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:22:38 2013 +0000\n\n    1.12.10 release\n"
  }, 
  {
   "commit": "ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37", 
   "message": "commit ed2fa6b16b03fccc3e21598cdb9157cbcebd1d37\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 16 20:58:46 2013 +0000\n\n    version: Post-release bump to 1.12.11\n"
  }, 
  {
   "commit": "fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc", 
   "message": "commit fa4f48cccb6c7f4e1afb2ff4b98b906b7d8d4afc\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Jan 23 15:04:26 2013 +0000\n\n    xlib: Do not upload the whole image just because we want an entire row\n    \n    Fixes regression exposed by\n    \n    commit a73e7ff0186176bc82cd3ae1432c054c1fd3aebd\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Sun Jan 6 11:29:27 2013 +0000\n    \n        xlib: Simplify source creation by use of map-to-image\n    \n    but ultimately from\n    \n    commit 74941f822015cc50cd8477d0cf97f1a70dbff60b\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Wed Jan 2 22:27:55 2013 +0000\n    \n        xlib: Use SHM transport for ordinary image uploads\n    \n    Reported-by: G\u00f6k\u00e7en Eraslan <gokcen.eraslan@gmail.com>\n    Reported-by: Guillaume Ayoub <guillaume.ayoub@kozea.fr>\n    Reported-by: Emmanuel Benisty <benisty.e@gmail.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=59635\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "7054c9969cb0e41845635d6658935da223899f08", 
   "message": "commit 7054c9969cb0e41845635d6658935da223899f08\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Jan 16 15:32:32 2013 +0100\n\n    gl: Don't query the display when checking if the context changed\n    \n    If display has changed, the associated context must change. A\n    context is tied a display so we can avoid this check, eliminating\n    unnecessary work during context acquisition and release.\n"
  }, 
  {
   "commit": "bb4072046016610a510373df3b67cdeb2ac1b583", 
   "message": "commit bb4072046016610a510373df3b67cdeb2ac1b583\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 11:55:10 2013 -0800\n\n    gl/msaa: Fix a memory leak in _clip_to_traps\n    \n    We need to clean up the polygon we create when decomposing a path into\n    trapezoids.\n"
  }, 
  {
   "commit": "a44b8bd70683a92d862b11c2d7359ce2b0a6a968", 
   "message": "commit a44b8bd70683a92d862b11c2d7359ce2b0a6a968\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Fri Jan 25 12:45:10 2013 -0800\n\n    gl: Fix typos in multisampling detection\n    \n    Instead of looking for the EXT_framebuffer_multisample, this code should\n    look for GL_EXT_framebuffer_multisample. GL_ARB_framebuffer_object also\n    contains all necessary API for using multisampling, so we don't need to\n    check for both it and the GL_EXT_framebuffer_blit and\n    GL_EXT_framebuffer_multisample pair.\n"
  }, 
  {
   "commit": "1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365", 
   "message": "commit 1e3424cfd1fea3f9aa2b1c8af4bb72239a94f365\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 22 14:54:38 2013 -0800\n\n    gl: Use GL_ALPHA textures for CAIRO_CONTENT_ALPHA glyph caching\n    \n    It's safe to us GL_ALPHA for glyph caching surfaces, since Cairo only\n    uses them for texture uploading. This saves a little bit of memory.\n"
  }, 
  {
   "commit": "cfe0e59663c71a6ecd0c976797ac32339e363af2", 
   "message": "commit cfe0e59663c71a6ecd0c976797ac32339e363af2\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Jan 22 20:09:01 2013 -0800\n\n    gl/msaa: Add a fast path for fills that are simple quads\n    \n    Instead of invoking Bentley-Ottman for fills that are simple\n    quadrilaterals, just pass the geometry straight to OpenGL.\n"
  }, 
  {
   "commit": "c986a7310bb06582b7d8a566d5f007ba4e5e75bf", 
   "message": "commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 24 08:55:54 2013 +0000\n\n    image: Enable inplace compositing with opacities for general routines\n    \n    On a SNB i5-2500:\n    \n    Speedups\n    ========\n             firefox-chalkboard  34284.16 -> 19637.40:  1.74x speedup\n             swfdec-giant-steps    778.35 ->   665.37:  1.17x speedup\n                      ocitysmap    485.64 ->   431.94:  1.12x speedup\n    \n    Slowdowns\n    =========\n               firefox-fishbowl  46878.98 -> 54407.14:  1.16x slowdown\n    \n    That slow down is due to overhead of the increased number of calls to\n    pixman_image_composite32() (pixman_transform_point for analyzing the\n    source extents in particular) outweighing any advantage gained by\n    performing the rasterisation in a single pass and eliding gaps. The\n    solution that has been floated in the past is for an interface into\n    pixman to only perform the analysis once and then to return a kernel to\n    use for all spans.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "1d105f215a9c62f5b60541da209bf71182a2e9df", 
   "message": "commit 1d105f215a9c62f5b60541da209bf71182a2e9df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:29:44 2013 +0000\n\n    image: Fix opaque span fills\n    \n    I should have realised the previous result was too good to be true!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "1ba9fb6fadcc1cb619af0ef974dffb0ff8672244", 
   "message": "commit 1ba9fb6fadcc1cb619af0ef974dffb0ff8672244\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:15:35 2013 +0000\n\n    Mark _cairo_path_is_simple_quad as private\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "d9d5adec256b3935e4f261d81c37c77a2649248b", 
   "message": "commit d9d5adec256b3935e4f261d81c37c77a2649248b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Jan 27 16:51:52 2013 +0000\n\n    image: And more fallout from c986a73, restore the absent short runs\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "3c18bae20ee2fea24d75f6986390ef8157d0207d", 
   "message": "commit 3c18bae20ee2fea24d75f6986390ef8157d0207d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Jan 28 10:03:54 2013 +0000\n\n    perf; Do not allow the backends to optimize away the clear before sync\n    \n    The importance of writing to the scratch surface before retrieving an\n    image is that it makes that the write lands in the server queue, as well\n    as the GetImage, in order to serialise the timer against all the\n    operations.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "1d1af825bb4fcfd7c4a54b65292734ba244e096d", 
   "message": "commit 1d1af825bb4fcfd7c4a54b65292734ba244e096d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:47:48 2013 +0000\n\n    xlib/shm: Tighten mark-active to the actual CopyArea on the ShmPixmap\n    \n    Along the draw_image_boxes() upload path, we were actually marking the\n    ShmPixmap as still active for the subsequent drawing operation - which\n    could in theory never be submitted...\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "30e950515171b25d9bc3da8d535cfe05d8be69c8", 
   "message": "commit 30e950515171b25d9bc3da8d535cfe05d8be69c8\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:49:26 2013 +0000\n\n    xlib/shm: Skip creating new SHM segments if the data is already in the xserver\n    \n    If the image is already inside a SHM segment, but the image format does\n    not match the surface, fallback to the XRender paths in order to perform\n    colorspace conversion on the data already inside the Xserver.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "02a2baa8dcf49ad2d9766d43578ba216fab0d464", 
   "message": "commit 02a2baa8dcf49ad2d9766d43578ba216fab0d464\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:51:25 2013 +0000\n\n    xlib/shm: Tidy creation of the proxy source for ShmPixmaps\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "a364a106b257c4493ba7b3badacc63599ba6064a", 
   "message": "commit a364a106b257c4493ba7b3badacc63599ba6064a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 02:52:10 2013 +0000\n\n    xlib/shm: Tidy up destroying the mempool for a shm block\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767", 
   "message": "commit fd59e6d86a3a1fc6720316f20deb8a0bd6f7b767\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:00:46 2013 +0000\n\n    xlib/shm: Always request a CompletionEvent from ShmPutImage\n    \n    ...and treat is as an expected event for synchronisation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "c006b886d28a772d7a62cec52ab7e0c8196c36f6", 
   "message": "commit c006b886d28a772d7a62cec52ab7e0c8196c36f6\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:01:31 2013 +0000\n\n    xlib/shm: Force synchronisation for scratch SHM image buffers\n    \n    The scratch image buffers are used for uploads to the xserver and so we\n    must be careful not to overwrite active SHM segments. Unfortunately we\n    told the core SHM allocator that we would sync before using the images,\n    which was a lie.\n    \n    Reported-by: Michael Natterer <mitch@gimp.org>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "9b92625151ca75a6ee10f231f83b53f67a371947", 
   "message": "commit 9b92625151ca75a6ee10f231f83b53f67a371947\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:49:56 2013 +0000\n\n    xlib/shm: Simplify uploading of SHM image data\n    \n    Make sure that we simply copy from the SHM segment into the target\n    drawable, and not inadvertently stage it through another SHM buffer.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "41ae904461e344fbfa3be3d276a7102bb4304b19", 
   "message": "commit 41ae904461e344fbfa3be3d276a7102bb4304b19\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 03:52:02 2013 +0000\n\n    xlib/shm: Appease the compiler for a 'maybe used uninitialised' variable\n    \n    Initialise shm during its declaration so that it is indeed initialised\n    for the cleanup after every path.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "74a19c527c1fa07ade2042a8d2acecbb5f6ccab1", 
   "message": "commit 74a19c527c1fa07ade2042a8d2acecbb5f6ccab1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 10:31:05 2013 +0000\n\n    configure: Include X11.h before testing for usability of Xrender.h\n    \n    On Solaris at least, the Xrender.h header is not standalone and requires\n    X11/X.h to be included first to define the essential types.\n    \n    Reported-by: Andreas F. Borchert <bugzilla@andreas-borchert.de>\n    Bugzilla; https://bugs.freedesktop.org/show_bug.cgi?id=58199\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "89092b97b50a7740058d0f72f94dfc6defe15ed6", 
   "message": "commit 89092b97b50a7740058d0f72f94dfc6defe15ed6\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 13:21:00 2013 -0800\n\n    gl/msaa: Don't emit alpha when emitting vertices\n    \n    The color attribute is disabled when not in spans mode, so the emitted\n    alpha is simply overwritten by the next vertex. Additionally, this can\n    potentially cause the alpha to be written past the end of the buffer.\n"
  }, 
  {
   "commit": "91834fbdee40f46e18d071fd2671a7a642e6aa86", 
   "message": "commit 91834fbdee40f46e18d071fd2671a7a642e6aa86\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 22:12:00 2013 +0000\n\n    xlib/shm: Clarify testing of seqno\n    \n    Rename the seqno tests into seqno_passed(), seqno_before() and\n    seqno_after() in order to clarify their semantics.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "2560c0b6577a6380ef175cf18bb804913784632c", 
   "message": "commit 2560c0b6577a6380ef175cf18bb804913784632c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Jan 29 23:51:44 2013 +0000\n\n    xlib/shm: More clarification of seqno required\n    \n    Everytime I read the predicate wrong, but hopefully, this time I have it\n    right!\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "ec58fde294afd52c89fa5ed21ba2611edfdbd550", 
   "message": "commit ec58fde294afd52c89fa5ed21ba2611edfdbd550\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:06:48 2013 +0000\n\n    perf: Synchronize before stopping the timers\n    \n    Fixes a regression from\n    \n    commit 2855ff4666922f2c38505414270d47f659b0d499\n    Author: Andrea Canciani <ranma42@gmail.com>\n    Date:   Wed Aug 31 16:42:03 2011 +0200\n    \n        perf: Reuse cairo-time\n    \n    which dropped the essential call to synchronize when refactoring the\n    code.\n    \n    Reported-by: Siarhei Siamashka <siarhei.siamashka@gmail.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f", 
   "message": "commit 22b7fae0368ba6cff23b2ebdf58bd7d1bfdfbd6f\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 14:19:53 2013 +0000\n\n    image: Add a reference for the clone's parent image\n    \n    We use the parent as a flag during map-to-image/umap-image that the\n    resultant image came from a fallback rather than as direct call\n    to the backend's map_to_image(). Whilst we use it as a simple flag,\n    we need to make sure the parent surface obeys the reference counting\n    semantics and is consistent for all callers.\n    \n    Unlike other users of the parent pointer, there is no resource sharing\n    between the two surfaces.\n    \n    Reported-by: Henry Song <henry.song@samsung.com>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "350f9fb5366079113eb8bca947d480362c3ae6be", 
   "message": "commit 350f9fb5366079113eb8bca947d480362c3ae6be\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:15:03 2013 +0000\n\n    test: Refresh refs for aa noise following reduction of the 2-stage compositing\n    \n    A side effect of\n    \n    commit c986a7310bb06582b7d8a566d5f007ba4e5e75bf\n    Author: Chris Wilson <chris@chris-wilson.co.uk>\n    Date:   Thu Jan 24 08:55:54 2013 +0000\n    \n        image: Enable inplace compositing with opacities for general routines\n    \n    is that we should in theory be reducing the rounding errors when\n    compositing coverage.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "a201a1169f472e822a66275b7dffe62f241d8ec0", 
   "message": "commit a201a1169f472e822a66275b7dffe62f241d8ec0\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 15:24:33 2013 +0000\n\n    1.12.12 release\n"
  }, 
  {
   "commit": "28dbafd5643fcf637a556fc196b5b984d44d151d", 
   "message": "commit 28dbafd5643fcf637a556fc196b5b984d44d151d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 16:23:24 2013 +0000\n\n    Post release version bump to 1.12.13\n"
  }, 
  {
   "commit": "15830fdb1087f18dcd6351de1034a5025b8ed343", 
   "message": "commit 15830fdb1087f18dcd6351de1034a5025b8ed343\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Jan 31 18:50:39 2013 +0000\n\n    NEWS: fix a couple of typos\n    \n    Reported-by: Thierry Vignaud\n"
  }, 
  {
   "commit": "c391093f40472c2300f38d0e5857858f85586b60", 
   "message": "commit c391093f40472c2300f38d0e5857858f85586b60\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 1 16:31:49 2013 +0000\n\n    image: Add a convenience function for creating an image from another's data\n    \n    The GL backend would like to extract a rectangle from another surface\n    and convert it to a different pixel format. The\n    _cairo_image_surface_create_from_image() does that by returning a new\n    image that has the contents of the specified rectangle in the source\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "18cff63e3d288bf2d7773760f2ab25c80a4a2bc1", 
   "message": "commit 18cff63e3d288bf2d7773760f2ab25c80a4a2bc1\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent writes to the user-data arrays during teardown\n    \n    As we cleanup the user-data arrays, we call the user provided destroy\n    notifier callbacks. These callbacks are at liberty to write back into\n    the parent surface, and in particular try to write into the arrays that\n    we have just freed. This causes hard to control and fairly unpredictable\n    use-after-frees in the client, so lets just rule out the dangerous\n    behaviour.\n    \n    References:https://bugzilla.mozilla.org/show_bug.cgi?id=722975\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "10110d58cee179cded8e4c4ff8a8d02c477585bd", 
   "message": "commit 10110d58cee179cded8e4c4ff8a8d02c477585bd\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sat Feb 2 08:47:26 2013 +0000\n\n    surface: Prevent reads from the user-data arrays during teardown\n    \n    In a similar fashion to the previous commit, we also need to be wary of\n    users simply trying to read from a potentially freed user-data array.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n"
  }, 
  {
   "commit": "d15a71f128c73ce1da19e6ff5a4e2fe044b58749", 
   "message": "commit d15a71f128c73ce1da19e6ff5a4e2fe044b58749\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 12:51:13 2013 +0000\n\n    qt: Update for fallback compositor\n    \n    We now need to explicitly manage fallbacks and to provide an\n    implementation for map-to-image/unmap-image.\n", 
   "image": {
    "samples": [
     1370760205.0, 
     1343994726.0, 
     1344504779.0, 
     1344469334.0, 
     1348740940.0, 
     1345065560.0, 
     1354018345.0, 
     1371682723.0, 
     1355248229.0, 
     1349563582.0, 
     1354646268.0, 
     1358322193.0, 
     1355485110.0, 
     1348373362.0, 
     1373552646.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1958199376.0, 
     1129472973.0, 
     1123177954.0, 
     1123018609.0, 
     1122164981.0, 
     1127139412.0, 
     1119476951.0, 
     1127567935.0, 
     1132630471.0, 
     1125417642.0, 
     1127276612.0, 
     1128520354.0, 
     1120993576.0, 
     1120648452.0, 
     1143815580.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "05ad89f91241b386f72f5b9bac3ebe62faff1d1b", 
   "message": "commit 05ad89f91241b386f72f5b9bac3ebe62faff1d1b\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 3 16:51:35 2013 +0000\n\n    gl: Replace manual vertex transformation with VS computation of texcoords\n    \n    Not only is our point transformation code is quite slow (well at least\n    compared to a real GPU), but by deriving the texture coordinates from\n    the vertex position we can elide the multiple arrays that we need to\n    construct and pass to GL - improving performance by eliminating CPU\n    overhead from needless transforms and data shovelling.\n    \n    However, not all vertex emission is suitable. For instance, for glyphs\n    we need to emit discontiguous texture coordinates for each glyph, but\n    span generation is suitable - which fortuitously also has the largest\n    vertex density and so benefits the most.\n    \n    The only real concern is for hardware without true vertex shader support\n    (e.g. i915) but there we are already invoking the VS to transform the\n    vertex into the viewport. We would need to eliminate that transform as\n    well as manually compute the texture coordinates in order to eliminate\n    the vertex recomputation pass.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1377145431.0, 
     1347640549.0, 
     1352803953.0, 
     1357317673.0, 
     1353977252.0, 
     1366700885.0, 
     1354163939.0, 
     1356996648.0, 
     1357579835.0, 
     1375334241.0, 
     1353914419.0, 
     1351895806.0, 
     1358078825.0, 
     1373982809.0, 
     1363129295.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2037714151.0, 
     1144387929.0, 
     1137845628.0, 
     1134202661.0, 
     1145483044.0, 
     1144143704.0, 
     1138753850.0, 
     1157716038.0, 
     1138074714.0, 
     1143773489.0, 
     1143129443.0, 
     1136330980.0, 
     1134386107.0, 
     1141378308.0, 
     1131850115.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "260c16331a2c7bedbcf35d7f2cbab2f1f4098c87", 
   "message": "commit 260c16331a2c7bedbcf35d7f2cbab2f1f4098c87\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Mon Feb 4 10:43:13 2013 +0000\n\n    gl: Include the vertex ident in the shader cache hash\n    \n    As we may specialise the vertex program depending upon details of the\n    fragment shader, and may have more than one program for the same\n    combination of fragment sources, we need to include the vertex tag in\n    the cache entry.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1352565471.0, 
     1341950562.0, 
     1346341283.0, 
     1352588486.0, 
     1355725434.0, 
     1354172168.0, 
     1344844862.0, 
     1355076024.0, 
     1364420708.0, 
     1340073722.0, 
     1349431921.0, 
     1352636811.0, 
     1356919330.0, 
     1356545960.0, 
     1354708066.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1801920314.0, 
     1144300191.0, 
     1145662688.0, 
     1144026846.0, 
     1146558407.0, 
     1148874344.0, 
     1151636711.0, 
     1140738455.0, 
     1151986268.0, 
     1142616325.0, 
     1133615699.0, 
     1145122134.0, 
     1148263421.0, 
     1149377477.0, 
     1133756229.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4cb181d985adbbf79e80ff695adc908810b41544", 
   "message": "commit 4cb181d985adbbf79e80ff695adc908810b41544\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:53:38 2013 +0000\n\n    gl: do not force flush everytime uploading a glyph image to glyph cache\n    \n    In normal cases, we want to flush pending operations reading from the\n    texture before modifying its contents.  However during uploading of\n    glyphs into the glyph cache, we repeatedly modify the texture as we\n    construct the vbo (whilst referencing it for that operation). We track\n    unused areas in the glyph cache so that if we run out of space, we can\n    explicitly flush the pending glyphs and start afresh and avoid having to\n    flush the operation in common case.\n", 
   "image": {
    "samples": [
     1363357863.0, 
     1353531192.0, 
     1361236104.0, 
     1357964438.0, 
     1360887529.0, 
     1354469094.0, 
     1366522920.0, 
     1365109690.0, 
     1359125649.0, 
     1366606463.0, 
     1373370939.0, 
     1373426420.0, 
     1379181646.0, 
     1373818855.0, 
     1370098653.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1922205542.0, 
     1138143771.0, 
     1138832802.0, 
     1139814070.0, 
     1155654631.0, 
     1147337560.0, 
     1145907075.0, 
     1138137905.0, 
     1146345917.0, 
     1153569772.0, 
     1158814313.0, 
     1145647957.0, 
     1151709641.0, 
     1145464005.0, 
     1154048986.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7bee1962f601009c507f987838de1a9dec3d9334", 
   "message": "commit 7bee1962f601009c507f987838de1a9dec3d9334\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 5 21:57:52 2013 +1030\n\n    type1-subset: in latin subsets replace glyph names with standard names\n    \n    When using WinAnsiEncoding in PDF the glyphs are keyed by glyph\n    name. We need to ensure the correct names are used and can't assume\n    the glyph names in the font are correct.\n    \n    Bug 60248\n", 
   "image": {
    "samples": [
     1364495215.0, 
     1372005937.0, 
     1353731081.0, 
     1356701277.0, 
     1358826239.0, 
     1355403539.0, 
     1349142813.0, 
     1366379551.0, 
     1354266354.0, 
     1360354427.0, 
     1359693551.0, 
     1354507808.0, 
     1360133644.0, 
     1358985030.0, 
     1358011983.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1734546166.0, 
     1144104384.0, 
     1139291948.0, 
     1134453814.0, 
     1125471809.0, 
     1133514471.0, 
     1122977866.0, 
     1143072969.0, 
     1133866538.0, 
     1160899785.0, 
     1151079273.0, 
     1160959350.0, 
     1149378893.0, 
     1149812600.0, 
     1150665978.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "400ea9c2905461067df9e6d27c2e961d47f04676", 
   "message": "commit 400ea9c2905461067df9e6d27c2e961d47f04676\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Feb 6 12:53:14 2013 -0800\n\n    gl/msaa: Properly fall back when using CLEAR operator\n    \n    There are some situations that the MSAA compositor doesn't support using\n    the CLEAR operator. We should properly fall back in those cases.\n", 
   "image": {
    "samples": [
     1377274109.0, 
     1347780076.0, 
     1350594446.0, 
     1343127675.0, 
     1348049807.0, 
     1344338158.0, 
     1353451580.0, 
     1350461886.0, 
     1355905489.0, 
     1361258356.0, 
     1356744154.0, 
     1353764765.0, 
     1353420651.0, 
     1363475545.0, 
     1353684390.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1631934028.0, 
     1113837286.0, 
     1128394155.0, 
     1128865954.0, 
     1123901984.0, 
     1115021977.0, 
     1122515083.0, 
     1140230710.0, 
     1130942738.0, 
     1136478910.0, 
     1124351481.0, 
     1130658382.0, 
     1135838285.0, 
     1128573880.0, 
     1136913022.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4b54c09c056e5dee65f2cf4e87835eb9127e5b1c", 
   "message": "commit 4b54c09c056e5dee65f2cf4e87835eb9127e5b1c\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Wed Feb 6 22:16:12 2013 +0000\n\n    image: Substitute OVER spans for SOURCE with an opaque pattern\n    \n    Based on an idea from Ravi Nanjundappa\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1346803595.0, 
     1330099407.0, 
     1341344619.0, 
     1341561432.0, 
     1338270368.0, 
     1344231310.0, 
     1338972292.0, 
     1348124562.0, 
     1346215978.0, 
     1346712097.0, 
     1341201031.0, 
     1347648367.0, 
     1351207459.0, 
     1350260065.0, 
     1350278407.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1709936636.0, 
     1111716585.0, 
     1114447297.0, 
     1121227721.0, 
     1118771310.0, 
     1115134708.0, 
     1118061766.0, 
     1127417788.0, 
     1121826156.0, 
     1130940246.0, 
     1116775141.0, 
     1115268801.0, 
     1126289160.0, 
     1123469262.0, 
     1108390528.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4b6b28b5e8b9020c72a60b01ff3340a70dd59478", 
   "message": "commit 4b6b28b5e8b9020c72a60b01ff3340a70dd59478\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 10:00:47 2013 +0000\n\n    win32: Fix is_win98()\n    \n    Since the translation into a separate function, its condition was\n    reversed: that is almost everybody thought they were on a win98 machine\n    and so had no working AlphaBlend().\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1344266531.0, 
     1339400171.0, 
     1343486505.0, 
     1344006283.0, 
     1345847079.0, 
     1341816729.0, 
     1345084623.0, 
     1345464269.0, 
     1359956809.0, 
     1345588767.0, 
     1345237880.0, 
     1343569808.0, 
     1343562851.0, 
     1365904998.0, 
     1332927514.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1673579798.0, 
     1103224204.0, 
     1136383198.0, 
     1121512576.0, 
     1118019026.0, 
     1126473408.0, 
     1122808215.0, 
     1120300481.0, 
     1124435632.0, 
     1135468573.0, 
     1122701892.0, 
     1158459494.0, 
     1105965528.0, 
     1121492621.0, 
     1129266687.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "562cc8227feb99b75fb53df7800df66887be129d", 
   "message": "commit 562cc8227feb99b75fb53df7800df66887be129d\nAuthor: Ravi Nanjundappa <ravi.nanjundappa@gmail.com>\nDate:   Mon Feb 6 10:56:55 2012 +0530\n\n    gl/spans: Handle SOURCE operations with opaque sources.\n    \n    SOURCE operations with an opaque are equivalent to OVER.\n    This can prevent us from falling back in certain cases.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1360774555.0, 
     1347615090.0, 
     1355576905.0, 
     1348314250.0, 
     1355591969.0, 
     1352085059.0, 
     1366659955.0, 
     1353084403.0, 
     1350637266.0, 
     1334398924.0, 
     1355594604.0, 
     1336525175.0, 
     1352132328.0, 
     1343484548.0, 
     1350816005.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1726570404.0, 
     1113109060.0, 
     1124123799.0, 
     1116263852.0, 
     1123185205.0, 
     1116199663.0, 
     1127117634.0, 
     1131085628.0, 
     1122926562.0, 
     1118667765.0, 
     1127421559.0, 
     1121736849.0, 
     1137737872.0, 
     1133097844.0, 
     1115891010.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "607a15db5df04d10e5be6d06599ec4e9d98d2446", 
   "message": "commit 607a15db5df04d10e5be6d06599ec4e9d98d2446\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Thu Feb 7 21:40:30 2013 +0000\n\n    gl: Mark up _cairo_gl_composite_set_operator* as private\n    \n    Add the cairo_private markup to hide the PLT entries and to keep make\n    check happy.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1369762369.0, 
     1349621058.0, 
     1344350841.0, 
     1347800005.0, 
     1357224469.0, 
     1351047116.0, 
     1352509324.0, 
     1356947323.0, 
     1353973180.0, 
     1359238535.0, 
     1348077611.0, 
     1367623061.0, 
     1366037618.0, 
     1362094626.0, 
     1350906310.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1601829428.0, 
     1140012796.0, 
     1133615386.0, 
     1125343862.0, 
     1131836496.0, 
     1156775930.0, 
     1141916068.0, 
     1147224222.0, 
     1133842079.0, 
     1144527717.0, 
     1133329277.0, 
     1136791059.0, 
     1143365574.0, 
     1151311944.0, 
     1148305587.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa", 
   "message": "commit 8cfbdf2f02ba01d5638a91c9f3f7fc228b402caa\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:10:25 2013 +0000\n\n    polygon: Only rely on the computed boundary intersections for crossing edges\n    \n    If we need to extrapolate the edge to the boundary, then we run the risk\n    of an overflow for an immaterial result. So if the edge does not cross\n    the boundary, we can simply use the corresponding end-point and not emit\n    the boundary segment.\n    \n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60489\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1355760846.0, 
     1348868238.0, 
     1352865670.0, 
     1354125135.0, 
     1357384468.0, 
     1370058759.0, 
     1359362959.0, 
     1369739091.0, 
     1352932272.0, 
     1363939498.0, 
     1350909439.0, 
     1366488727.0, 
     1360374237.0, 
     1370913157.0, 
     1375402478.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1863228867.0, 
     1128073916.0, 
     1141090096.0, 
     1128933295.0, 
     1141229670.0, 
     1139462267.0, 
     1135879633.0, 
     1146903065.0, 
     1132702510.0, 
     1143128225.0, 
     1132536978.0, 
     1136191586.0, 
     1143635351.0, 
     1140126801.0, 
     1150353371.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ea16302e45ced56e6f12b8520e9f530e1ffc68c4", 
   "message": "commit ea16302e45ced56e6f12b8520e9f530e1ffc68c4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 13:22:01 2013 +0000\n\n    polygon: Avoid computing the unused intersection coordinates\n    \n    If we only ignore the result of the computed boundary intersection,\n    because the edge is inside that boundary, then we can simply forgo the\n    calculation.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1364541616.0, 
     1338453583.0, 
     1343888923.0, 
     1338894731.0, 
     1337970649.0, 
     1345241475.0, 
     1340378692.0, 
     1347788186.0, 
     1358431272.0, 
     1349585212.0, 
     1352963825.0, 
     1369572695.0, 
     1356689679.0, 
     1368661351.0, 
     1366972964.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1520905994.0, 
     1135662261.0, 
     1126344940.0, 
     1131493381.0, 
     1154612338.0, 
     1135187259.0, 
     1135327330.0, 
     1136506452.0, 
     1140918712.0, 
     1137313520.0, 
     1138306517.0, 
     1149660776.0, 
     1156427203.0, 
     1142126037.0, 
     1142935849.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2d7ac9e737f37daf8490c27e6a04c65bba642645", 
   "message": "commit 2d7ac9e737f37daf8490c27e6a04c65bba642645\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 15:19:14 2013 +0000\n\n    xlib: Only apply the dst offset to the glyph strings once\n    \n    The elts offset is a delta from the previous glyph coordinate. So by\n    subtracting the dst origin everytime, we were accumulating a glyph\n    position error. Instead we just want to offset the starting coordinate\n    and then always use relative positions.\n    \n    Reported-by: Theo Veenker <T.J.G.Veenker@uu.nl>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1361324528.0, 
     1369076290.0, 
     1370063727.0, 
     1366466916.0, 
     1373569869.0, 
     1365112623.0, 
     1366770439.0, 
     1366307778.0, 
     1378616991.0, 
     1370988660.0, 
     1369689735.0, 
     1366264397.0, 
     1373062558.0, 
     1363095759.0, 
     1369722427.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1547212798.0, 
     1144680025.0, 
     1139272490.0, 
     1140198121.0, 
     1139372422.0, 
     1155344974.0, 
     1163420609.0, 
     1143103530.0, 
     1135911849.0, 
     1145323263.0, 
     1143176107.0, 
     1156234302.0, 
     1139815472.0, 
     1145056421.0, 
     1147728174.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d4651676e1496f0354acb0ef045e8b65601edf6d", 
   "message": "commit d4651676e1496f0354acb0ef045e8b65601edf6d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 8 22:17:13 2013 +0000\n\n    win32: Clear the similar-image before returning to the user\n    \n    Our userspace API mandates that surfaces created for the user are\n    cleared before they are returned. Make it so for the win32 similar image\n    constructor.\n    \n    Reported-by: Michael Henning <drawoc@darkrefraction.com>\n    Bugzilla: https://bugs.freedesktop.org/show_bug.cgi?id=60519\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1359760006.0, 
     1348757061.0, 
     1337587326.0, 
     1340386836.0, 
     1345050118.0, 
     1352304643.0, 
     1329436477.0, 
     1349850933.0, 
     1336069982.0, 
     1350914096.0, 
     1346627757.0, 
     1348346626.0, 
     1340790755.0, 
     1354000731.0, 
     1361439813.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1600177023.0, 
     1138977268.0, 
     1158211198.0, 
     1145668086.0, 
     1130415927.0, 
     1147959272.0, 
     1144720927.0, 
     1143379712.0, 
     1148491394.0, 
     1142175889.0, 
     1145648747.0, 
     1142850217.0, 
     1149956188.0, 
     1149322525.0, 
     1153326075.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "93ddc3a28308bcd9e062178ceb453f26e9228fc4", 
   "message": "commit 93ddc3a28308bcd9e062178ceb453f26e9228fc4\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:13:31 2013 +0000\n\n    tests: Update reference images after adjustments to polygon line clipping\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1355108390.0, 
     1338170118.0, 
     1347122302.0, 
     1343265323.0, 
     1348896848.0, 
     1362779743.0, 
     1351858774.0, 
     1337866105.0, 
     1348803922.0, 
     1345078761.0, 
     1350124478.0, 
     1352448537.0, 
     1357827662.0, 
     1356355984.0, 
     1348632076.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1129855964.0, 
     1124169193.0, 
     1131284529.0, 
     1146241923.0, 
     1131642518.0, 
     1126260410.0, 
     1141578402.0, 
     1133808727.0, 
     1129032995.0, 
     1129394470.0, 
     1134006347.0, 
     1149195059.0, 
     1124021117.0, 
     1130811644.0, 
     1130747405.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "0dac37c41473deafa4a2f154187c5c3d08b07c91", 
   "message": "commit 0dac37c41473deafa4a2f154187c5c3d08b07c91\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 13:38:28 2013 +0000\n\n    1.12.14 release\n", 
   "image": {
    "samples": [
     1356121860.0, 
     1345778734.0, 
     1361336942.0, 
     1341311479.0, 
     1349882599.0, 
     1343418633.0, 
     1353321408.0, 
     1351104773.0, 
     1362021423.0, 
     1357178614.0, 
     1353702790.0, 
     1352142953.0, 
     1354121651.0, 
     1357469596.0, 
     1367087281.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1932699013.0, 
     1150453266.0, 
     1128870110.0, 
     1136057814.0, 
     1135008096.0, 
     1144076521.0, 
     1137428570.0, 
     1132951484.0, 
     1137296047.0, 
     1130236671.0, 
     1123606189.0, 
     1128902382.0, 
     1130142487.0, 
     1143498495.0, 
     1143160347.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7f3cca458a7546f913533f693b581325228aba4e", 
   "message": "commit 7f3cca458a7546f913533f693b581325228aba4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 10 14:18:47 2013 +0000\n\n    Post release version bump to 1.12.15\n", 
   "image": {
    "samples": [
     1377675707.0, 
     1365213249.0, 
     1360933271.0, 
     1359811207.0, 
     1352627580.0, 
     1367387704.0, 
     1360425081.0, 
     1373893883.0, 
     1369540365.0, 
     1372944027.0, 
     1366498637.0, 
     1360915651.0, 
     1377490680.0, 
     1353239126.0, 
     1346964317.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2064034749.0, 
     1142566839.0, 
     1118959222.0, 
     1125328829.0, 
     1135766606.0, 
     1141498971.0, 
     1136696800.0, 
     1139810875.0, 
     1143388244.0, 
     1126517472.0, 
     1125965445.0, 
     1142601569.0, 
     1127264831.0, 
     1136179923.0, 
     1151574450.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "14237f11439831377b59e8ea5717de5dd3e19e73", 
   "message": "commit 14237f11439831377b59e8ea5717de5dd3e19e73\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:11:12 2013 +0000\n\n    spans: Mark the surface as cleared in preparing for recording surface playback\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1351077332.0, 
     1344294910.0, 
     1340396984.0, 
     1344108665.0, 
     1355329258.0, 
     1343887621.0, 
     1344345252.0, 
     1354053967.0, 
     1349091462.0, 
     1617068569.0, 
     1356450973.0, 
     1343195410.0, 
     1356909639.0, 
     1347400032.0, 
     1352520675.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1857556846.0, 
     1136648816.0, 
     1130512403.0, 
     1156866925.0, 
     1140084944.0, 
     1146127033.0, 
     1141821787.0, 
     1136039998.0, 
     1157691885.0, 
     1137505635.0, 
     1142535791.0, 
     1138581427.0, 
     1151040797.0, 
     1143561030.0, 
     1146907038.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be1561dadece6e947a3ca78d1124197b4278ce96", 
   "message": "commit be1561dadece6e947a3ca78d1124197b4278ce96\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:24:08 2013 +0000\n\n    recording: Avoid indirection through indices array if not reduced\n    \n    If we don't discard any elements, then the index array is simply a 1:1\n    mapping of the element array, and we may as well bypass it.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1346982830.0, 
     1355854937.0, 
     1337011257.0, 
     1521514656.0, 
     1342399954.0, 
     1344475242.0, 
     1359582548.0, 
     1347894245.0, 
     1335356254.0, 
     1344879129.0, 
     1356410380.0, 
     1351754667.0, 
     1358584678.0, 
     1347257693.0, 
     1350470501.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1507967696.0, 
     1134524962.0, 
     1135950741.0, 
     1139817890.0, 
     1121276184.0, 
     1138375658.0, 
     1153404714.0, 
     1126758486.0, 
     1126994471.0, 
     1135326989.0, 
     1129286088.0, 
     1135304870.0, 
     1131241999.0, 
     1128103241.0, 
     1145363543.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a09b7c79278465ee1ad916697e0153eae640d8df", 
   "message": "commit a09b7c79278465ee1ad916697e0153eae640d8df\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:25:03 2013 +0000\n\n    path: Fix bbox computation for negative scale factors\n    \n    The fast path for transforming a path by a simple scale factor, forgot\n    to fix up the orientation of the box if that scale factor was negative.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1341067597.0, 
     1336840054.0, 
     1348861156.0, 
     1344864541.0, 
     1351457205.0, 
     1340714939.0, 
     1352215855.0, 
     1347963675.0, 
     1364226419.0, 
     1364666287.0, 
     1343472802.0, 
     1349857263.0, 
     1364791211.0, 
     1353021720.0, 
     1358100601.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1895906462.0, 
     1143374620.0, 
     1131014797.0, 
     1129501632.0, 
     1143548031.0, 
     1128006582.0, 
     1126955179.0, 
     1137502404.0, 
     1132519342.0, 
     1148402578.0, 
     1144322774.0, 
     1138607791.0, 
     1132316125.0, 
     1136618091.0, 
     1125873841.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "02b467a28703a0bd68b92fb26f7905bf6a25bf7d", 
   "message": "commit 02b467a28703a0bd68b92fb26f7905bf6a25bf7d\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 12 10:46:42 2013 +0000\n\n    test: Exercise replaying a recording surface through a flip matrix\n", 
   "image": {
    "samples": [
     1353338180.0, 
     1342820151.0, 
     1345753546.0, 
     1358770183.0, 
     1363654470.0, 
     1354863894.0, 
     1352656345.0, 
     1358691008.0, 
     1361820345.0, 
     1363408502.0, 
     1365982296.0, 
     1354037721.0, 
     1367120232.0, 
     1355856782.0, 
     1376361862.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1628520350.0, 
     1136930945.0, 
     1138720693.0, 
     1125858478.0, 
     1133609551.0, 
     1123764551.0, 
     1138856363.0, 
     1150235498.0, 
     1148243969.0, 
     1144055972.0, 
     1133742592.0, 
     1128730714.0, 
     1133177916.0, 
     1129626153.0, 
     1155946048.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41e646e019911f8e566e4f9963036117750f862f", 
   "message": "commit 41e646e019911f8e566e4f9963036117750f862f\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Tue Jan 29 17:30:25 2013 +0000\n\n    gl: disable GL_DITHER\n    \n    GL_DITHER is enabled by default by spec. Leaving GL_DITHER enabled\n    causes color pixel mismatch on some drivers by comparing uploading then\n    readPixels and original image.\n", 
   "image": {
    "samples": [
     1368413301.0, 
     1334564957.0, 
     1336734296.0, 
     1342996312.0, 
     1355095889.0, 
     1351276507.0, 
     1344654080.0, 
     1359217838.0, 
     1355811068.0, 
     1349435563.0, 
     1353194670.0, 
     1354391545.0, 
     1352161608.0, 
     1360726777.0, 
     1354737774.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1711218599.0, 
     1114637563.0, 
     1111839015.0, 
     1119032917.0, 
     1122453325.0, 
     1131806393.0, 
     1140815517.0, 
     1126763958.0, 
     1130378919.0, 
     1127945957.0, 
     1120805973.0, 
     1128681386.0, 
     1126071549.0, 
     1136168018.0, 
     1135529986.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fb1abbc4bc25c541cfb1084012a6a185c541c340", 
   "message": "commit fb1abbc4bc25c541cfb1084012a6a185c541c340\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Feb 15 14:04:21 2013 +0000\n\n    win32: Free the fallback upon finish\n    \n    Zoz\u00f3 Teki pointed out that we leak the fallback surface upon finish in\n    case it was active at the time as the preceding flush would only clear\n    the damage and not decouple the fallback surface.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1335161273.0, 
     1320283851.0, 
     1337239672.0, 
     1329959291.0, 
     1335479487.0, 
     1336205193.0, 
     1342435395.0, 
     1338014568.0, 
     1332881401.0, 
     1350442552.0, 
     1348040077.0, 
     1342475199.0, 
     1343211021.0, 
     1347209251.0, 
     1357017671.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1749085379.0, 
     1135266018.0, 
     1118845232.0, 
     1126281384.0, 
     1130258748.0, 
     1127004888.0, 
     1131820735.0, 
     1127740010.0, 
     1134804423.0, 
     1135731308.0, 
     1133851858.0, 
     1128179026.0, 
     1139825209.0, 
     1136143831.0, 
     1135955588.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "e7e1ac235ff94d184d88c8c206b81343822f6a4e", 
   "message": "commit e7e1ac235ff94d184d88c8c206b81343822f6a4e\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Tue Feb 19 09:54:24 2013 +0000\n\n    image: Compare against the true size of the embedded buffer\n    \n    When querying whether the run is small enough to fit inside the\n    pre-allocated temporary buffer, we need to avoid comparing against\n    sizeof(buf) as buf is a variable length array and so sizeof() is\n    meaningless.\n    \n    Reported-by: Edward Zimmermann <Edward.Zimmermann@cib.de>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1361280266.0, 
     1353793042.0, 
     1342659451.0, 
     1358034265.0, 
     1363864733.0, 
     1356213914.0, 
     1357046085.0, 
     1352465363.0, 
     1352688474.0, 
     1351170770.0, 
     1343294120.0, 
     1344794583.0, 
     1345114863.0, 
     1341458109.0, 
     1358609833.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2093671764.0, 
     1123323064.0, 
     1124178034.0, 
     1109659466.0, 
     1120307042.0, 
     1125028098.0, 
     1116700907.0, 
     1134958446.0, 
     1126712772.0, 
     1137010521.0, 
     1158944318.0, 
     1134703318.0, 
     1129338865.0, 
     1144459102.0, 
     1133534787.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "446a3dc5c0298e35b9a1e38460bc3804ab6e01ce", 
   "message": "commit 446a3dc5c0298e35b9a1e38460bc3804ab6e01ce\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Tue Feb 19 20:59:16 2013 +1030\n\n    pdf: add missing 'endobj' to shading dict\n    \n    https://bugs.launchpad.net/ubuntu/+source/libcairo/+bug/1051939\n", 
   "image": {
    "samples": [
     1354008104.0, 
     1350543888.0, 
     1343494498.0, 
     1351440520.0, 
     1353872563.0, 
     1354038251.0, 
     1355575962.0, 
     1356571312.0, 
     1349851804.0, 
     1355750060.0, 
     1356976579.0, 
     1356317787.0, 
     1352704744.0, 
     1353245882.0, 
     1356784009.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1692860202.0, 
     1118081877.0, 
     1130775465.0, 
     1121589966.0, 
     1143760624.0, 
     1129245565.0, 
     1110720795.0, 
     1122260200.0, 
     1133718195.0, 
     1128897980.0, 
     1133122666.0, 
     1126174576.0, 
     1129056047.0, 
     1135710171.0, 
     1126591176.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "7658eced9a45f42033c2b0b45cee70f6edb6ff20", 
   "message": "commit 7658eced9a45f42033c2b0b45cee70f6edb6ff20\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Sun Feb 24 17:07:54 2013 +0000\n\n    xlib: Fix invocation of XRenderFindFormat()\n    \n    The 'count' parameter is an indication to libXrender of the number of\n    matches to skip before reporting (rather than a limit on the number to\n    report). As we only want the first match, always pass 0.\n    \n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1344626712.0, 
     1341172139.0, 
     1340781893.0, 
     1345582841.0, 
     1343911923.0, 
     1337795783.0, 
     1341937451.0, 
     1332637109.0, 
     1344479157.0, 
     1351263819.0, 
     1344748295.0, 
     1353093076.0, 
     1346435702.0, 
     1350934101.0, 
     1344667926.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1653977234.0, 
     1132657411.0, 
     1140831227.0, 
     1134987700.0, 
     1149240002.0, 
     1137811191.0, 
     1131476978.0, 
     1144787379.0, 
     1133907064.0, 
     1155382365.0, 
     1144447148.0, 
     1139581168.0, 
     1150178859.0, 
     1147106154.0, 
     1140828024.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "4f00d2344c84a1017a1e7d76ccb2fa552c80a969", 
   "message": "commit 4f00d2344c84a1017a1e7d76ccb2fa552c80a969\nAuthor: Jana Saout <jana@saout.de>\nDate:   Fri Mar 1 20:10:28 2013 +1030\n\n    pdf: Fix crash\n    \n    Bug 61451\n", 
   "image": {
    "samples": [
     1358928271.0, 
     1344903170.0, 
     1336897274.0, 
     1345566163.0, 
     1331455552.0, 
     1333562766.0, 
     1345983871.0, 
     1355898912.0, 
     1357312585.0, 
     1343859446.0, 
     1338167222.0, 
     1358423801.0, 
     1338736051.0, 
     1344108484.0, 
     1349266344.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1866389823.0, 
     1126886603.0, 
     1108996682.0, 
     1123614079.0, 
     1113544559.0, 
     1128421651.0, 
     1133897522.0, 
     1127323799.0, 
     1119538962.0, 
     1127138329.0, 
     1138892933.0, 
     1138997563.0, 
     1134675499.0, 
     1133283912.0, 
     1139407053.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "a8f1b456db744e33a10b2301df03528787e5b1ca", 
   "message": "commit a8f1b456db744e33a10b2301df03528787e5b1ca\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Fri Mar 8 06:21:59 2013 -0500\n\n    [FT] Prefer downscaling bitmap glyphs to upscaling\n    \n    Say, you have bitmap strikes for sizes 50ppem and 100ppem.\n    To render at 60ppem, it's much better to downscale the 100ppem\n    bitmap than upscale 50ppem one.  Prefer downscaling.\n", 
   "image": {
    "samples": [
     1351882955.0, 
     1346743760.0, 
     1346992761.0, 
     1354776870.0, 
     1359778558.0, 
     1357516250.0, 
     1352130811.0, 
     1374322272.0, 
     1356538653.0, 
     1345481332.0, 
     1359391373.0, 
     1357750834.0, 
     1358691540.0, 
     1341375501.0, 
     1362832923.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1768495252.0, 
     1109375939.0, 
     1121306926.0, 
     1118790243.0, 
     1132479536.0, 
     1132154240.0, 
     1129644267.0, 
     1137095914.0, 
     1141355000.0, 
     1151900591.0, 
     1123998383.0, 
     1119378792.0, 
     1131456286.0, 
     1130881656.0, 
     1136196248.0
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
   "image": {
    "samples": [
     1361940515.0, 
     1348235995.0, 
     1350277319.0, 
     1372049109.0, 
     1350664284.0, 
     1348440256.0, 
     1353605618.0, 
     1355834117.0, 
     1350776407.0, 
     1353793257.0, 
     1356080839.0, 
     1358844234.0, 
     1360624411.0, 
     1355591079.0, 
     1367360523.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1706577441.0, 
     1116065545.0, 
     1129030946.0, 
     1120194213.0, 
     1115180831.0, 
     1142655030.0, 
     1121059151.0, 
     1131432181.0, 
     1133092873.0, 
     1125378070.0, 
     1126477275.0, 
     1116959518.0, 
     1130097462.0, 
     1134444213.0, 
     1120208245.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "5ee136b2c067c92e85f04ba0c84966f7760f4556", 
   "message": "commit 5ee136b2c067c92e85f04ba0c84966f7760f4556\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 8 10:29:55 2013 -0800\n\n    gl: Setup operands when the vertex size changes\n    \n    Previously _cairo_gl_composite_setup_vbo was overwriting the old context\n    vertex_size, while _cairo_gl_context_setup_operand was relying on it to\n    determine if the vertex size changed. Instead of a fragile ordering of\n    statements, pass whether the vertex size changed as an argument to enforce\n    the calling order via method parameters.\n", 
   "image": {
    "samples": [
     1349288045.0, 
     1345785373.0, 
     1347057531.0, 
     1338840633.0, 
     1342551808.0, 
     1344150392.0, 
     1346508524.0, 
     1348294518.0, 
     1350984474.0, 
     1359794780.0, 
     1367087688.0, 
     1367568236.0, 
     1354964102.0, 
     1351818978.0, 
     1365107821.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1958900410.0, 
     1121295428.0, 
     1125656598.0, 
     1119374528.0, 
     1121444186.0, 
     1120177512.0, 
     1126060505.0, 
     1124571510.0, 
     1120489651.0, 
     1115563910.0, 
     1121314234.0, 
     1117977545.0, 
     1124289466.0, 
     1123286940.0, 
     1115853040.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c60e23feb16a8745eaa6d213a89f61ded5707731", 
   "message": "commit c60e23feb16a8745eaa6d213a89f61ded5707731\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Wed Mar 13 17:19:19 2013 -0700\n\n    path: Fix a bug in line intersection\n    \n    Before the intersection code was not taking into account that both\n    quotients are required to be in the range (0,1) for the segments to\n    intersect or handling the case of negative numerators and denominators.\n", 
   "image": {
    "samples": [
     1375336922.0, 
     1354569143.0, 
     1360247723.0, 
     1352990129.0, 
     1368113830.0, 
     1357181686.0, 
     1368024294.0, 
     1350341271.0, 
     1357229008.0, 
     1367332424.0, 
     1366889531.0, 
     1354807856.0, 
     1369756149.0, 
     1360841095.0, 
     1359831892.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1645871914.0, 
     1117064258.0, 
     1127300095.0, 
     1126352411.0, 
     1127933766.0, 
     1115999373.0, 
     1138963989.0, 
     1133145215.0, 
     1126257194.0, 
     1128717796.0, 
     1163690021.0, 
     1140039986.0, 
     1132059926.0, 
     1131123596.0, 
     1129410986.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "aadece05fb1cf80f0a1138368f4664e878a59204", 
   "message": "commit aadece05fb1cf80f0a1138368f4664e878a59204\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:16:01 2013 -0700\n\n    stroke: Fix large line widths for fallback stroke shaper\n    \n    Fix the test case line-width-tolerance for the fallback stroke shaper.\n    Instead of drawing quads between spline points, draw triangle based on\n    the actual spline edges. This roughly follows the approach of the\n    tristrip and polygonal shapers.\n", 
   "image": {
    "samples": [
     1368005879.0, 
     1336750275.0, 
     1338219243.0, 
     1333131527.0, 
     1346938708.0, 
     1336505694.0, 
     1329558023.0, 
     1340694906.0, 
     1338783019.0, 
     1337237165.0, 
     1331125536.0, 
     1330584365.0, 
     1338639356.0, 
     1347238299.0, 
     1342985787.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1564086412.0, 
     1139976769.0, 
     1141778342.0, 
     1144114194.0, 
     1144521851.0, 
     1146649925.0, 
     1155160019.0, 
     1149932808.0, 
     1150019153.0, 
     1151401731.0, 
     1151303209.0, 
     1154817888.0, 
     1154537426.0, 
     1151981904.0, 
     1153246517.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "2c2dccf5a4d298c866f7c0faed2e10c65252c168", 
   "message": "commit 2c2dccf5a4d298c866f7c0faed2e10c65252c168\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Tue Mar 12 15:17:19 2013 -0700\n\n    stroke: Use round-joins near inflection points of splines\n    \n    Similar to b7bd5ae4f3da44131261711bb236cd7aa24a3ae3, but applied to the\n    fallback stroke shaper.\n", 
   "image": {
    "samples": [
     1348824319.0, 
     1328833588.0, 
     1337999776.0, 
     1337133271.0, 
     1340825281.0, 
     1350715462.0, 
     1331934881.0, 
     1347500861.0, 
     1352132912.0, 
     1350797410.0, 
     1347738041.0, 
     1355022056.0, 
     1355076135.0, 
     1354041215.0, 
     1349495048.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1807561319.0, 
     1127497168.0, 
     1126813630.0, 
     1129769261.0, 
     1114106207.0, 
     1126055840.0, 
     1116024670.0, 
     1134406604.0, 
     1127674851.0, 
     1114949942.0, 
     1137515628.0, 
     1119642113.0, 
     1145712687.0, 
     1153184323.0, 
     1136711667.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "01a8bf01c6508a4fea8d40371c3049e7a2f7908a", 
   "message": "commit 01a8bf01c6508a4fea8d40371c3049e7a2f7908a\nAuthor: Chris Wilson <chris@chris-wilson.co.uk>\nDate:   Fri Mar 15 09:08:00 2013 +0000\n\n    mempool: Reduce an assert into an error return for get_buddy()\n    \n    If we ask for a buddy that is outside of our allocation that is an\n    error that should not happen with a power-of-two allocated zone...\n    However, since it has been seen in the wild, we can safely return that\n    there is no buddy rather than die in a too-late assert.\n    \n    Reported-by: Anton Eliasson <devel@antoneliasson.se>\n    Signed-off-by: Chris Wilson <chris@chris-wilson.co.uk>\n", 
   "image": {
    "samples": [
     1356087873.0, 
     1344528492.0, 
     1342724370.0, 
     1370987322.0, 
     1356842549.0, 
     1349298501.0, 
     1367532368.0, 
     1356845343.0, 
     1366730089.0, 
     1357108141.0, 
     1361636686.0, 
     1360258511.0, 
     1364390067.0, 
     1372881421.0, 
     1359287208.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1858907229.0, 
     1143829643.0, 
     1141372850.0, 
     1137073413.0, 
     1139762928.0, 
     1140981937.0, 
     1160422606.0, 
     1160828400.0, 
     1143845690.0, 
     1157660465.0, 
     1154307701.0, 
     1155611677.0, 
     1152952184.0, 
     1152991617.0, 
     1147669365.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "c141615a7fa632a2435b49f3949ed1fc9962af1f", 
   "message": "commit c141615a7fa632a2435b49f3949ed1fc9962af1f\nAuthor: Marek Kasik <mkasik@redhat.com>\nDate:   Fri Mar 15 14:46:19 2013 +0100\n\n    cff-subset: Fix allocation of width arrays\n    \n    fd_default_width and fd_nominal_width\n    are arrays of doubles not arrays of ints.\n", 
   "image": {
    "samples": [
     1364383718.0, 
     1351567929.0, 
     1365292782.0, 
     1374307170.0, 
     1374357436.0, 
     1360145636.0, 
     1369743524.0, 
     1362520858.0, 
     1374182595.0, 
     1363183949.0, 
     1363259348.0, 
     1357390454.0, 
     1368535563.0, 
     1369895346.0, 
     1365003518.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1573542014.0, 
     1138325332.0, 
     1146625111.0, 
     1155195840.0, 
     1153896663.0, 
     1138302730.0, 
     1140710195.0, 
     1135589113.0, 
     1153160812.0, 
     1150905867.0, 
     1149998291.0, 
     1162822871.0, 
     1157149662.0, 
     1149770403.0, 
     1139069132.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "592f5944239debfa3dacc410f675261947156baf", 
   "message": "commit 592f5944239debfa3dacc410f675261947156baf\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 15 16:53:28 2013 +0100\n\n    test: Fix CAIRO_REF_DIR\n    \n    Ever since the test output was moved from test/ to test/output/, using\n    CAIRO_REF_DIR to make the test suite succeed no longer works. The test suite was\n    looking for the wrong file names.\n    \n    This patch makes this work again. However, I am not sure that this really is the\n    correct fix. It just seems to work. :-)\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1352186672.0, 
     1339722753.0, 
     1330783333.0, 
     1334785868.0, 
     1349684909.0, 
     1333957451.0, 
     1326526499.0, 
     1344891071.0, 
     1338613369.0, 
     1363345594.0, 
     1349759891.0, 
     1353703369.0, 
     1341276500.0, 
     1348292571.0, 
     1343413860.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1826103161.0, 
     1129846191.0, 
     1142343625.0, 
     1127365530.0, 
     1155837408.0, 
     1150785682.0, 
     1136441315.0, 
     1140440710.0, 
     1138605664.0, 
     1140741129.0, 
     1138442013.0, 
     1157463942.0, 
     1152908504.0, 
     1155439665.0, 
     1152227697.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "0e999edff869bc08522a6a56c69efa9b5e1c33b5", 
   "message": "commit 0e999edff869bc08522a6a56c69efa9b5e1c33b5\nAuthor: Matthew Fischer <matthew.fischer@canonical.com>\nDate:   Sat Mar 9 15:42:59 2013 -0700\n\n    Adding a simple usage statement to cairo-perf-chart\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1350150461.0, 
     1336708702.0, 
     1354681738.0, 
     1345304622.0, 
     1340115685.0, 
     1365370080.0, 
     1355582880.0, 
     1361999703.0, 
     1367718007.0, 
     1354611997.0, 
     1343039337.0, 
     1356862980.0, 
     1361801069.0, 
     1369040777.0, 
     1343358913.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1146344190.0, 
     1145400892.0, 
     1134435852.0, 
     1141696430.0, 
     1144646357.0, 
     1150812088.0, 
     1140553733.0, 
     1136526577.0, 
     1139161220.0, 
     1149253858.0, 
     1145310628.0, 
     1133598211.0, 
     1144879802.0, 
     1146687976.0, 
     1166131543.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be347acd5a198b4280f2699a1abfca241e7e610b", 
   "message": "commit be347acd5a198b4280f2699a1abfca241e7e610b\nAuthor: Matt Sealey <matt@genesi-usa.com>\nDate:   Mon Mar 11 10:24:52 2013 -0500\n\n    gitignore: negate gitignore for static pkgconfig files\n    \n    Commit 781f253 adds a rule cairo-*.*.* to .gitignore in the root dir.\n    Unfortunately this matches several src/cairo-*.pc.in files in the\n    src directory.\n    \n    The build system requires these files to be present, but the rule is\n    allowing them to be ignored. For example, when extracting a cgit\n    snapshot tarball and checking it into another git repository, these\n    files get left behind. Any accidental changes to these files will go\n    unnoticed by a 'git status' (possibly creating bad installs) and\n    any intentional changes could not be committed (git commit -a will\n    miss them, and every one will need to be forced). This is not really\n    desirable.\n    \n    We don't want to unignore *.pc.in here since there are many, many\n    autogenerated files with this name, and the cairo-*.*.* rule is in\n    general quite useful and doesn't warrant modification (although it\n    could be made a little more specific), so we just make these 4 files\n    a special case and negate the match with full filenames in src/.\n    \n    Signed-off-by: Matt Sealey <matt@genesi-usa.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1375991853.0, 
     1346358251.0, 
     1351237841.0, 
     1363159191.0, 
     1358821523.0, 
     1357350230.0, 
     1357977604.0, 
     1359805794.0, 
     1372706132.0, 
     1351862763.0, 
     1350258445.0, 
     1342871283.0, 
     1346343610.0, 
     1342557851.0, 
     1350551416.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2049549641.0, 
     1140784753.0, 
     1124117665.0, 
     1130236766.0, 
     1124834480.0, 
     1119230847.0, 
     1135358774.0, 
     1140844095.0, 
     1135334076.0, 
     1121894822.0, 
     1130680902.0, 
     1134967947.0, 
     1134953526.0, 
     1144137103.0, 
     1131695554.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ff233fd706e62edf267bee66113e2cb35183bcd9", 
   "message": "commit ff233fd706e62edf267bee66113e2cb35183bcd9\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Mon Mar 18 14:17:29 2013 -0400\n\n    [test] Set font size\n    \n    Previously this test was working because we were not scaling bitmap\n    fonts.  We do now, so adjust test.\n", 
   "image": {
    "samples": [
     1365377660.0, 
     1343233911.0, 
     1332870621.0, 
     1332032394.0, 
     1343774496.0, 
     1339408319.0, 
     1338404449.0, 
     1356720175.0, 
     1355237921.0, 
     1342782471.0, 
     1343397558.0, 
     1342878783.0, 
     1342275604.0, 
     1342394113.0, 
     1350741008.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1539356091.0, 
     1147166931.0, 
     1140671298.0, 
     1141955227.0, 
     1149128287.0, 
     1151844227.0, 
     1143920030.0, 
     1145088127.0, 
     1148990766.0, 
     1146797215.0, 
     1151388803.0, 
     1177885392.0, 
     1154968680.0, 
     1157422285.0, 
     1156223997.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c", 
   "message": "commit ed6a293e3dd2e81c8e159bf685cce6ffbcd7c81c\nAuthor: Henry Song <henry.song@samsung.com>\nDate:   Wed Mar 20 15:10:34 2013 +0000\n\n    gl: Fix typo in gles2 shader cache lookup\n    \n    When comparing shader cache entries, it's important that we actually\n    compare the variable type hash.\n", 
   "image": {
    "samples": [
     1337955684.0, 
     1331126491.0, 
     1336802397.0, 
     1334935458.0, 
     1333207235.0, 
     1345957237.0, 
     1334866588.0, 
     1356226566.0, 
     1347827007.0, 
     1337038024.0, 
     1347118146.0, 
     1353563056.0, 
     1344652705.0, 
     1347824483.0, 
     1344175370.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2002958435.0, 
     1149010428.0, 
     1157160485.0, 
     1150007631.0, 
     1148823357.0, 
     1163720869.0, 
     1153033039.0, 
     1145546802.0, 
     1141851976.0, 
     1164665394.0, 
     1149701018.0, 
     1166304256.0, 
     1152074468.0, 
     1149908267.0, 
     1144808683.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b", 
   "message": "commit 13bd8d09b44e50649f6fc4d58d036bc32c1d5c5b\nAuthor: Behdad Esfahbod <behdad@behdad.org>\nDate:   Thu Mar 21 16:48:43 2013 -0400\n\n    [ft] I meant fabs(), not abs()\n", 
   "image": {
    "samples": [
     1353170531.0, 
     1356006779.0, 
     1340459221.0, 
     1359806896.0, 
     1365968093.0, 
     1349403767.0, 
     1355749332.0, 
     1359021062.0, 
     1364507821.0, 
     1364232400.0, 
     1373254993.0, 
     1354878418.0, 
     1360965195.0, 
     1368602476.0, 
     1369525049.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2062357615.0, 
     1146789806.0, 
     1130201045.0, 
     1165499575.0, 
     1150471685.0, 
     1147848022.0, 
     1137502722.0, 
     1139905942.0, 
     1149443147.0, 
     1134978615.0, 
     1141445519.0, 
     1133240092.0, 
     1135584335.0, 
     1161153032.0, 
     1135535777.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "caf50c07e225ee3a3e149234601e7305b1437736", 
   "message": "commit caf50c07e225ee3a3e149234601e7305b1437736\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 13:58:04 2013 +0100\n\n    test: Fix handling of dots in CAIRO_TEST_TARGET\n    \n    Before this, the following happened:\n    \n      $ CAIRO_TEST_TARGET=image,xcb-render-0.0 make test\n      Cannot find target 'image'.\n      Known targets: image, [...]\n    \n    The reason for this is that _cairo_boilerplate_target_matches_name() doesn't get\n    a null-terminated string, but instead has a pointer to the end of the string.\n    However, strpbrk() expects a null-terminated argument and thus could return a\n    result which points past the end of the input.\n    \n    This commit fixes exactly this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1353726312.0, 
     1335069228.0, 
     1348048096.0, 
     1363282734.0, 
     1351491242.0, 
     1373729641.0, 
     1351562444.0, 
     1350673953.0, 
     1356076426.0, 
     1365157262.0, 
     1359996792.0, 
     1374298706.0, 
     1361748852.0, 
     1356527224.0, 
     1357249560.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1559461803.0, 
     1139708166.0, 
     1142061025.0, 
     1127419619.0, 
     1139225221.0, 
     1151868328.0, 
     1135661948.0, 
     1136566484.0, 
     1141101187.0, 
     1132987589.0, 
     1136328202.0, 
     1137265238.0, 
     1133458629.0, 
     1146203071.0, 
     1159031705.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "b7c06fff1f597ba74fa6618766ec297d3a4bf880", 
   "message": "commit b7c06fff1f597ba74fa6618766ec297d3a4bf880\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:04:44 2013 +0100\n\n    boilerplate: rename xcb-render-0.0 to xcb-render-0_0\n    \n    The test suite uses dots to separate the backend name from the content type.\n    Thus, the backend name must not contain any dots.\n    \n    The xlib backend already calls its RENDER 0.0 target xlib-render-0_0 for this\n    reason. This commit makes the xcb backend match this.\n    \n    Reported-by: Darxus <darxus@chaosreigns.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1339412602.0, 
     1341447799.0, 
     1349364677.0, 
     1349348280.0, 
     1349746305.0, 
     1360265069.0, 
     1345255692.0, 
     1345509737.0, 
     1354848547.0, 
     1351522747.0, 
     1367423538.0, 
     1368632147.0, 
     1343768982.0, 
     1345778400.0, 
     1364007439.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1775039665.0, 
     1131491864.0, 
     1145552119.0, 
     1129262215.0, 
     1140119916.0, 
     1153251828.0, 
     1141220152.0, 
     1138363253.0, 
     1155189637.0, 
     1136459167.0, 
     1141550953.0, 
     1133434383.0, 
     1142184699.0, 
     1153408743.0, 
     1140243514.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437", 
   "message": "commit 41ef69a98c67a2cb8b64e8ef3bb986d57a0a2437\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 14:14:29 2013 +0100\n\n    Fix \"make check\" standalone header check\n    \n    This fixes the following error:\n    \n    ./cairo-fixed-private.h: In function \u2018_slow_segment_intersection\u2019:\n    ./cairo-fixed-private.h:374:9: error: \u2018FALSE\u2019 undeclared (first use in this function)\n    ./cairo-fixed-private.h:374:9: note: each undeclared identifier is reported only once for each function it appears in\n    ./cairo-fixed-private.h:386:12: error: \u2018TRUE\u2019 undeclared (first use in this function)\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1350329666.0, 
     1339331781.0, 
     1356414657.0, 
     1347339539.0, 
     1347299651.0, 
     1350939118.0, 
     1355729300.0, 
     1356290654.0, 
     1352543861.0, 
     1357693204.0, 
     1365531494.0, 
     1356633191.0, 
     1372254487.0, 
     1365402059.0, 
     1363524694.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1908824650.0, 
     1150587134.0, 
     1143528718.0, 
     1140488158.0, 
     1133238186.0, 
     1137989650.0, 
     1125311488.0, 
     1130854254.0, 
     1141923669.0, 
     1138812470.0, 
     1143912793.0, 
     1136356191.0, 
     1146813149.0, 
     1136556414.0, 
     1136163896.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "be5eabb66a475720020211a6d37bfeb75fc3242c", 
   "message": "commit be5eabb66a475720020211a6d37bfeb75fc3242c\nAuthor: Uli Schlachter <psychon@znc.in>\nDate:   Fri Mar 22 18:19:00 2013 +0100\n\n    xcb: Clear temporary replay image in recording playback\n    \n    This gets rid of random noise that we got from the X11 server due to\n    uninitialized memory.\n    \n    Fixes: pdf-surface-source, ps-surface-source, svg-surface-source\n    \n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1367988188.0, 
     1337718105.0, 
     1334816353.0, 
     1343621215.0, 
     1342418627.0, 
     1341828345.0, 
     1345147671.0, 
     1335470091.0, 
     1342291812.0, 
     1351443487.0, 
     1354732921.0, 
     1352594694.0, 
     1342740142.0, 
     1348393141.0, 
     1348988846.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1121087845.0, 
     1115998838.0, 
     1142126640.0, 
     1125530710.0, 
     1124739334.0, 
     1123647469.0, 
     1146269248.0, 
     1144880425.0, 
     1135640971.0, 
     1134689383.0, 
     1137043342.0, 
     1140135199.0, 
     1128662200.0, 
     1142023730.0, 
     1137976356.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "59ccc3d72e839bd897111322765bb13696a97ef5", 
   "message": "commit 59ccc3d72e839bd897111322765bb13696a97ef5\nAuthor: Nicola Fontana <ntd@entidi.it>\nDate:   Fri Mar 1 14:16:45 2013 +0100\n\n    gobject: Add wrapper around cairo_matrix_t\n    \n    Reviewed-By: Benjamin Otte <otte@redhat.com>\n    Signed-off-by: Uli Schlachter <psychon@znc.in>\n", 
   "image": {
    "samples": [
     1353165301.0, 
     1333802326.0, 
     1350852838.0, 
     1346658580.0, 
     1345419062.0, 
     1339453660.0, 
     1354239524.0, 
     1346957530.0, 
     1353276313.0, 
     1351666928.0, 
     1353918512.0, 
     1344610359.0, 
     1344773360.0, 
     1341629100.0, 
     1352971372.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1908368027.0, 
     1132346179.0, 
     1128167064.0, 
     1140551321.0, 
     1140998772.0, 
     1138918458.0, 
     1128327398.0, 
     1130428515.0, 
     1137197621.0, 
     1139133330.0, 
     1147629510.0, 
     1143622531.0, 
     1142301565.0, 
     1144532017.0, 
     1151459787.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "9e0748e223cfb8c5557c73f3ab5068ec1323e7c2", 
   "message": "commit 9e0748e223cfb8c5557c73f3ab5068ec1323e7c2\nAuthor: Adrian Johnson <ajohnson@redneon.com>\nDate:   Wed Mar 27 08:08:32 2013 +1030\n\n    pdf: fix typo in bbox check\n    \n    http://lists.cairographics.org/archives/cairo/2013-March/024186.html\n", 
   "image": {
    "samples": [
     1348279829.0, 
     1354191717.0, 
     1344314328.0, 
     1356556746.0, 
     1366838000.0, 
     1348935684.0, 
     1358247741.0, 
     1360044160.0, 
     1351676064.0, 
     1360474251.0, 
     1364378506.0, 
     1368020805.0, 
     1358947169.0, 
     1367070588.0, 
     1352603991.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1637153581.0, 
     1139269595.0, 
     1143430708.0, 
     1123307527.0, 
     1137686916.0, 
     1151662757.0, 
     1139209017.0, 
     1124291893.0, 
     1136146658.0, 
     1121432547.0, 
     1128355620.0, 
     1125197020.0, 
     1153772876.0, 
     1147527138.0, 
     1149948150.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "fdec6b37596d8b064ff082326d7189daa8208052", 
   "message": "commit fdec6b37596d8b064ff082326d7189daa8208052\nAuthor: Michael Hutchinson <m.j.hutchinson@gmail.com>\nDate:   Fri Mar 29 02:37:33 2013 +0100\n\n    quartz: Don't release memory we don't own\n    \n    This was causing crashes due to double frees.\n    \n    https://bugs.freedesktop.org/show_bug.cgi?id=62885\n    \n    Signed-off-by: Benjamin Otte <otte@redhat.com>\n", 
   "image": {
    "samples": [
     1360976313.0, 
     1342024871.0, 
     1343781467.0, 
     1338515352.0, 
     1347874551.0, 
     1350724298.0, 
     1347921138.0, 
     1350291555.0, 
     1360314989.0, 
     1356730705.0, 
     1349451282.0, 
     1356203661.0, 
     1357727944.0, 
     1348455454.0, 
     1349682424.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     1771228488.0, 
     1133311094.0, 
     1125019034.0, 
     1137081425.0, 
     1129825570.0, 
     1134747858.0, 
     1136759508.0, 
     1133463395.0, 
     1128606314.0, 
     1145300687.0, 
     1132908549.0, 
     1133414463.0, 
     1129098850.0, 
     1142229379.0, 
     1147529286.0
    ], 
    "normalization": 1000000.0
   }
  }, 
  {
   "commit": "d35e5e2bc75ddf2046c91dc0b3f40d406bab8850", 
   "message": "commit d35e5e2bc75ddf2046c91dc0b3f40d406bab8850\nAuthor: Martin Robinson <mrobinson@igalia.com>\nDate:   Fri Mar 29 11:09:48 2013 -0700\n\n    boilerplate/gl: Disable thread awareness\n    \n    This dramatically speeds up testing on NVidia and actually makes it\n    possible to run traces within a reasonable amount of time.\n    \n    cairo-perf-trace results for:\n    NVIDIA Corporation GeForce GTS 250/PCIe/SSE2 3.3.0 NVIDIA 310.14\n    \n    Before:\n    test              min(s)  median(s) stddev. count\n    gvim              30.924  31.251    0.72%   5/6\n    firefox-fishbowl  168.751 201.017   12.46%  8/8\n    (exited early)\n    \n    After:\n    test              min(s)  median(s) stddev. count\n    gvim              1.294   1.325     1.79%   6/6\n    firefox-fishbowl  18.540  19.104    1.54%   6/6\n", 
   "image": {
    "samples": [
     1353055878.0, 
     1342856058.0, 
     1337579149.0, 
     1342394015.0, 
     1332857766.0, 
     1345282421.0, 
     1341045751.0, 
     1340090560.0, 
     1351070789.0, 
     1332981836.0, 
     1336251417.0, 
     1338815326.0, 
     1350232807.0, 
     1349970731.0, 
     1349013270.0
    ], 
    "normalization": 1000000.0
   }, 
   "xlib": {
    "samples": [
     2095902249.0, 
     1139504477.0, 
     1139787446.0, 
     1146779515.0, 
     1136637380.0, 
     1135699086.0, 
     1138264382.0, 
     1146395609.0, 
     1129068825.0, 
     1149904107.0, 
     1129745725.0, 
     1129249321.0, 
     1142041194.0, 
     1138739083.0, 
     1127477905.0
    ], 
    "normalization": 1000000.0
   }
  }
 ]
};