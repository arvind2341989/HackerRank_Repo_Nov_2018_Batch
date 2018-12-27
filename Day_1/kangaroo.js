function kangaroo(x1, v1, x2, v2) {
    var jumps = 0;
    var counter = 1;
    var k1 = 0, k2 = 0;
    if (x1 == x2 && v1 == v2) return "YES";
    else if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) return "NO";
    else {
        if ((x1 - x2) % (v1 - v2) == 0) return "YES";
        else return "NO";
    }
    return "NO";
}