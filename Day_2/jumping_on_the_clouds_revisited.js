function jumpingOnClouds(c, k) {
    var e = 100, i = 0;
    if (c[i] == 1) { e = e - 2; }
    while(i<c.length) { 
        i = i + k;
        --e;
        if (c[i] == 1) { 
            e = e - 2;
        }
    }
    return e;
}