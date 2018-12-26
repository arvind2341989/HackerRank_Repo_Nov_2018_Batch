function hurdleRace(k, height) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < height.length; i++){
        if (height[i] > max) {
            max = height[i];
        }
    }
    return Math.max(0, max - k);
}