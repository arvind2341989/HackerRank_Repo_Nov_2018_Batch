function pageCount(n, p) {
    var count = 0;
    let checkHalf = n / 2;
    if (p <= checkHalf) {
        count = parseInt(p / 2);
    }
    else {
        if (n % 2 == 0) count = parseInt((n - p + 1) / 2);
        else count = parseInt((n - p) / 2);
    }
    return count;
}