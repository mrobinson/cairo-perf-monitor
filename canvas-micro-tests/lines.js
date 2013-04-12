function runTest(testContext) {
    var context = testContext.context;

    for (var i = 0; i < testContext.iterations; i++) {
        context.strokeStyle = getRandomColor();

        context.beginPath();
        context.moveTo(Math.random() * testContext.width, Math.random() * testContext.height);
        context.lineTo(Math.random() * testContext.width, Math.random() * testContext.height);
        context.stroke();
   }
   testContext.count++;
}
