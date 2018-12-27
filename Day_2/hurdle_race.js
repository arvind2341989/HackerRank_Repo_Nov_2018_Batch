function hurdleRace(k, height) {
    var j = 0;
    for (var i = 0; i < height.length; i++) {
        if (height[i] - k > j) {
            j = height[i] - k;
        }
    }
    return j;
}
