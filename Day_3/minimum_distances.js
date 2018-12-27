function minimumDistances(a) {

    var flag = 0, count = [];
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                count[flag] = Math.abs(j - i);
                flag++;
            }
        }
    }

    if (flag == 0) {
        return -1;
    } else {
        count.sort(function (a, b) { return a - b });
        return count[0];
    }
}