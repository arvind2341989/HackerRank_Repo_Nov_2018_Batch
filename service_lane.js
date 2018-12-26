function serviceLane(n, cases, width) {
    var res = [];
    for (var i = 0; i < cases.length; i++) {
        var start = cases[i][0];
        var end = cases[i][1];
        var min = Number.MAX_VALUE;
        for (var j = start; j <= end; j++) {
            if (min > width[j]) {
                min = width[j];
            }
        }
        res.push(min);
    }
    return res;
}