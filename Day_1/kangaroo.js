function kangaroo(x1, v1, x2, v2) {
    if (v2 >= v1) {
        return "NO";
    }
    var numerator = x1 - x2;
    var denominator = v2 - v1;
    if (numerator % denominator == 0) {
        return "YES";
    }
    else {
        return "NO";
    }

}