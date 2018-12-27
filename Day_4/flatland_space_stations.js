function flatlandSpaceStations(n, c) {

    var max = 0;
    for (var i = 0; i < n; i++) {
        var cost = n;
        for (var j = 0; j < c.length; j++) {
            if (Math.abs(i - c[j]) < cost) {
                cost = Math.abs(i - c[j]);
            }
        }
        if (cost > max) {
            max = cost;
        }
    }
    return max;
}
