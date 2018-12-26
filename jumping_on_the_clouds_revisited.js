function jumpingOnClouds(c, k, n) {
    var e = 100, i = 0, times = 0;
    var isStart = true;
    while (i != 0 || isStart) {
        if (i == 0 && isStart) {
            isStart = false;
        }
        if (c[i] == 1) {
            e = e - 2;
        }
        e--;
        i = (i + k) % n;
    }
    return e;
}