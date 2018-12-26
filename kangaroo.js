function kangaroo(x1, v1, x2, v2) {
    var result = "NO";
    if (v1 > v2) { 
        if ((x2 - x1) % (v1 - v2) == 0) { 
            result = "YES";
        }
    }
    return result;
}