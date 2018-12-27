function angryProfessor(k, a) {
    var student = 0;
    for (var i = 0; i < a.length; i++) { 
        if (a[i] <= 0) { 
            student++;
        }
    }
    if (student >= k) {
        return "NO";
    }
    else {
        return "YES";
     }

}