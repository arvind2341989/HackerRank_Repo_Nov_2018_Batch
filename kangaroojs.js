function kangaroo(x1, v1, x2, v2) {
    var a = 0, b = 0;
    if (v1 < v2) return "NO";
    if (x1 < x2 && v1 > v2) {
        a = Math.abs(x1 - x2);
        b = Math.abs(v1 - v2);
        if (a % b == 0) {
            return "YES";
        } else {
            return "NO";
        }
    }
    return "NO";

}