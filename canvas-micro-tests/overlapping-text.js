function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.fillStyle = getRandomColor();

        // On most systems, Times New Roman glyphs slightly overlap each other and are drawn
        // with an intermediary mask.
        context.font = "16px Times New Roman";
        context.fillText("ABCDEFGHIJKLMN",
                         Math.random() * testContext.width,
                         Math.random() * testContext.height);
   }
   testContext.count++;
}
