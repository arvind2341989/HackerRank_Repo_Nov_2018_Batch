function strangeCounter(t) {
    var s = 3, d = 3;
    while (t > s) {
        s = s + d * 2;
        d = d * 2;
    }
    var value = s - t + 1;
    return value;
}