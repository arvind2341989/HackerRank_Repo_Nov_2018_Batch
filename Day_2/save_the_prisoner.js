function saveThePrisoner(n, m, s) {
    var temp = s + m - 1;
    if (s + m < n) {
        return temp
    }
    else {
        if ((temp % n) == 0) {
            return (n);
        }
        else {
            return (temp % n);
        }
    }
}
