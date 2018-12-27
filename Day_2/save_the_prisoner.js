function saveThePrisoner(n, m, s) {
    if (n == 0 || m == 0 || s == 0) return 0;
    if (n == 1 && m == 1 && s == 1) return 1;
    var f_num = parseInt((s + (m - 1)) % n);
    if (f_num == 0) return n;
    else return f_num;
}