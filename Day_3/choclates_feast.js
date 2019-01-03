function chocolateFeast(n, c, m) {
    var wrappers = 0;
    var choclates = 0;
    choclates = parseInt(n / c);
    wrappers = choclates;
    while (wrappers >= m) {
        var choclates1 = parseInt(wrappers / m);
        choclates += choclates1;
        wrappers = wrappers % m;
        wrappers += choclates1;
    }
    return choclates;
}