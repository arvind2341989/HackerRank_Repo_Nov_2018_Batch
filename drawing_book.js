function pageCount(n, p) {
    var i = 0, count1 = 0, count2 = 0;
    if (n % 2 == 1) {
        n--;
    }
    n = (n / 2) + 1;
    if (p % 2 == 1) {
        p--;
    }
    p = (p / 2) + 1;
    count1 = Math.abs(p - 1);
    count2 = Math.abs(p - n);
    if (count1 > count2) {
        return count2;
    }
    return count1;
}