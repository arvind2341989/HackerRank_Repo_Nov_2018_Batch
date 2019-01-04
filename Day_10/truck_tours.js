function truckTour(petrolpumps) {
    var curGas = 0;
    var startingPoint = 0;
    for (var i = 0; i < petrolpumps.length - 1; i++) {
        curGas += petrolpumps[i][0];
        if (curGas < petrolpumps[i][1]) {
            curGas = 0;
            startingPoint = i + 1;
        }
        else {
            curGas -= pumps[i][1];
        }
    }
    return startingPoint;
}