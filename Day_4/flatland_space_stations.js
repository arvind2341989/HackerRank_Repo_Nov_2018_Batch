function flatlandSpaceStations(n, c) {

    var diff;
    var dist = [];
    for (var i = 0; i < n; i++) {
        var min = Number.MAX_VALUE;
        for (var j = 0; j < c.length; j++) {
            diff = Math.abs(i - c[j]);
            if (min > diff) {
                min = diff;
            }
        }
        dist.push(min);
    }
    return Math.max.apply(null, dist);
}