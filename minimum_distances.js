function minimumDistances(a) {
    var i = 0, j = 0, min = 10000000, enter = 0;
    for (i = 0; i < a.length - 1; i++) {
        for (j = i + 1; j < a.length; j++) {
            if (a[i] == a[j] && Math.abs(j - i) < min) {
                min = Math.abs(j - i);
                enter++;
            }
        }
    }
    if (enter > 0) {
        return min;
    }
    return -1;
}