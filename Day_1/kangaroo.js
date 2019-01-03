function kangaroo(x1, v1, x2, v2) {
    var flag = 0;
    if (v2 < v1) {

        if (((x2 - x1) % (v1 - v2)) == 0) {
            return "YES";
        }
    }
    return "NO";

}