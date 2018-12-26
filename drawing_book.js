function pageCount(n, p) {
    if (p == n || p == 1) {
        return 0;
    }
    var fromLast = 0;
    var fromFront = 1;
    var front = 3;
    var last = n - 1;
    var lastPageIsOdd = false;
    if (n % 2 == 0) {
        fromLast = 1;
        last--;
    }
    else {
        lastPageIsOdd = true;
    }
    while (p < last) {
        last -= 2;
        fromLast++;
    }
    while (p > front) {
        front += 2;
        fromFront++;
    }
    return Math.min(fromFront, fromLast)
}