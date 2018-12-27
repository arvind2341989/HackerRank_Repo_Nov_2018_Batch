function saveThePrisoner(n, m, s) {
    var i;
    m = m % n;
    if ((s + m - 1) % n == 0) {
        return n;
    }
    return (s + m - 1) % n;
}