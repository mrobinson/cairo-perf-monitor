function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.strokeStyle = getRandomColor();

        var y  = Math.random() * testContext.height;
        context.beginPath();
        context.moveTo(Math.random() * testContext.width, y);
        context.lineTo(Math.random() * testContext.width, y);

        context.stroke();
   }
   testContext.count++;
}
