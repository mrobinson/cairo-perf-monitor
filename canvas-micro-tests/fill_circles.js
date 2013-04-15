function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.fillStyle = getRandomColor();

        var x = Math.random() * testContext.width;
        var y = Math.random() * testContext.height;
        var radius = Math.random() * Math.min(testContext.width - x, testContext.height - y);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fill();
   }
   testContext.count++;
}

