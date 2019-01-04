function hourglassSum(a) {
    var max = -64;
    for (var i = 1; i < 5; i++) {
        for (var j = 1; j < 5; j++) {
            var sum = a[i - 1][j - 1] + a[i - 1][j] + a[i - 1][j + 1] + a[i][j]
                + a[i + 1][j - 1] + a[i + 1][j] + a[i + 1][j + 1];
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
}