function findMin(lanes, i, j) {
    var min = 10000000;
    for (var k = i; k <= j; k++) {
        if (lanes[k] < min) {
            min = lanes[k];
        }
    }
    return min;
}