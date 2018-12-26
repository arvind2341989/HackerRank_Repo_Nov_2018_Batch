function utopianTree(n) {
    var i = 0, h=1;
    for (i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            h = h * 2;
        }
        else {
            h = h + 1;
        }
    }
    return h;

}