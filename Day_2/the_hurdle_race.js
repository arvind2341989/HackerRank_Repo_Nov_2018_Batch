function hurdleRace(k, height) {
    height.sort(function (a, b) { return a - b; });
    if (k > height[height.length - 1]) return 0;
    else return (height[height.length - 1] - k);

}