function angryProfessor(k, a) {
    var i = 0, count = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            count++;
        }
    }
    if (count >= k)
        return "NO";
    else
        return "YES";
}