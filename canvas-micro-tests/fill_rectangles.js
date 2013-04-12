function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.fillStyle = getRandomColor();

        var x1 = Math.random() * testContext.width;
        var x2 = Math.random() * testContext.width;
        var y1 = Math.random() * testContext.height;
        var y2 = Math.random() * testContext.height;

        context.beginPath();
        context.fillRect(Math.min(x1, x2), Math.min(y1, y2),
                         Math.abs(x2 - x1), Math.abs(y2 - y1));
   }
   testContext.count++;
}
