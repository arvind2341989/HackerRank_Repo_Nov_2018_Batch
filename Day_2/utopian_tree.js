function utopianTree(n) {
    var h = 1;
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            h = h * 2;
        } else {
            h = h + 1;
        } 
    }
    return h;
}