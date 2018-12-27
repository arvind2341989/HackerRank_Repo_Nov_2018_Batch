function chocolateFeast(n, c, m) {
    var count = Math.floor(n / c), k;
    k = count;
    while (k >= m) { 
        let s = 0;
        s = Math.floor(k / m);
        count = count + s;
        k = k % m;
        k = k + s;
    }
    return count;
}