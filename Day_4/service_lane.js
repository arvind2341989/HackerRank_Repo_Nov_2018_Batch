function serviceLane(n, cases, width) {
    var result = [];
    for (var i = 0; i < cases.length; i++) {
        var start = cases[i][0];
        var end = cases[i][1];
        var min = Number.MAX_VALUE;
        for (var j = start; j <= end; j++) {
            if (min > width[j]) {
                min = width[j];
            }
        }
        result.push(min);
    }
    return result;
}