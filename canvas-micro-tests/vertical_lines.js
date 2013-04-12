function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.strokeStyle = getRandomColor();

        var x = Math.random() * testContext.width;
        context.beginPath();
        context.moveTo(x, Math.random() * testContext.height);
        context.lineTo(x, Math.random() * testContext.height);

        context.stroke();
   }
   testContext.count++;
}
