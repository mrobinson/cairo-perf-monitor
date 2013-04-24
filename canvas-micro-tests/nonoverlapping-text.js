function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.fillStyle = getRandomColor();

        // On most systems Sans glyphs do not overlap one another and are not drawn with
        // an intermediary mask in CairoGL.
        context.font = "16px Sans";
        context.fillText("ABCDEFGHIJKLMN",
                         Math.random() * testContext.width,
                         Math.random() * testContext.height);
   }
   testContext.count++;
}
