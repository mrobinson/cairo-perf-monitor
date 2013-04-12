function runTest(testContext) {
    var context = testContext.context;

    function randomPoint() {
        return [Math.random() * testContext.width, Math.random() * testContext.height];
    }

    for (var i = 0; i < testContext.iterations; i++) {
        context.strokeStyle = getRandomColor();

        var p1 = randomPoint();
        var p2 = randomPoint();
        var p3 = randomPoint();

        context.beginPath();
        context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
        context.fill();
   }
   testContext.count++;
}
