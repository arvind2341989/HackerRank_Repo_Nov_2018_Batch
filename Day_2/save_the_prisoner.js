function saveThePrisoner(n, m, s) {
    if (n - s + 1 >= m) {
        return s + m - 1;
    }
    else {
        m = m - (n - s + 1);
        m = m % n;
        if (m == 0)
            return n;
        return m;
    }

}