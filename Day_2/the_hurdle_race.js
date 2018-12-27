function hurdleRace(k, height) {
    var i = 0, max = 0;
    for (i = 0; i < height.length; i++) {
        if (height[i] - k > max) {
            max = height[i] - k;
        }
    }
    return max;

   

}