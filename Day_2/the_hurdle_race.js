function hurdleRace(k, height) {
    var max = 0;
    for (var i = 0; i < height.length; i++)
    {
        if ((height[i] - k)> max)
        { max = height[i] - k; }
    }
    return max;
}