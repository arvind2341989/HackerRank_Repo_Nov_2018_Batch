function angryProfessor(k, a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            k--;
        }
        if (k == 0) {
            return "NO";
        }
    }
    return "YES";
}