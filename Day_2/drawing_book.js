function pageCount(n, p) {
    var mid = Math.trunc(n / 2), turns = 0;
    if (p == mid) {
        turns = Math.trunc(p / 2);
    }
    else {
        if (p < mid) {
            if (p % 2 == 0) {
                turns = p / 2;
            }
            else {
                turns = Math.trunc(p / 2);
            }
        }
        else {
            var n2 = n - p;
            if (n2 % 2 == 0) {
                turns = n2 / 2;
            }
            else {
                if (n2 == 1 && n % 2 == 0) turns = 1;
                else turns = Math.trunc(n2 / 2);
            }
        }
    }
    return turns;

}