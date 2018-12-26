function saveThePrisoner(n, m, s) {
    return ((m + s - 1) % n != 0) ? ((m + s - 1) % n) : n;
}