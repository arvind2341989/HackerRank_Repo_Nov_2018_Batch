function pickingNumbers(a) {
    var length = 0,compare = 0;
    a.sort(function (a, b) { return a - b});
    for (var j = 0; j < a.length; j++) {
        length = 1;
        for (var i = j+1; i < a.length; i++) {
            if (Math.abs(a[j] - a[i]) <= 1) {
                length++;
            }
        }
        if (compare < length) { compare = length;}

    }
    return compare;
}