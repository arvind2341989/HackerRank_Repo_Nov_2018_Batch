function serviceLane(n, cases, width) {
    var result = [];
    for (var i = 0; i < cases.length; i++) {
        var a = cases[i][0], b = cases[i][1];
        var min = width[a];
        for (var j = a; j <= b; j++) {
            if (min > width[j]) {
                min = width[j];
            }
        }
        result.push(min);
    }
    return result;
}