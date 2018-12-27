function jumpingOnClouds(c) {
    var jumps = 0;
    for (var i = 0; i < c.length - 1;) {
        if (c[i] != 1) {
            jumps++;
        }
        i += (c[i + 2] == 0) ? 2 : 1;
    }
    return jumps;
}