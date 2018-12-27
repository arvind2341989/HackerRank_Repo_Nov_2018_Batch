function (n, c, m) {
    var t_chocolates = Math.floor(n / c);
    var wrappers = t_chocolates;

    while (wrappers >= m) {
        var choco_again = Math.floor(wrappers / m);
        t_chocolates = t_chocolates + choco_again;
        wrappers = wrappers - choco_again * m + choco_again;
    }
    return t_chocolates;
}
