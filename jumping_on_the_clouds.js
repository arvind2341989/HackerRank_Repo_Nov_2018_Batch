function jumpingOnClouds(c) {
    var jumps = 0, i = 0;
    while(i < c.length-1) { 
        if (c[i + 2] != 1) {
            ++jumps;
            i = i + 2;
        }
        else { 
            ++jumps;
            i = i + 1;
        }
    }
    return jumps;
}