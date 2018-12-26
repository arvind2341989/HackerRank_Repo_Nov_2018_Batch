function hurdleRace(k, height) {
    height.sort(function (a, b) { return a - b });
    var max = 0;
    max = height[height.length - 1];
    if (k > max) {
        return 0;
    } else {
        var d = 0;
        d = max - k;
        return d;
    }
}