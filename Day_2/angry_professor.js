function angryProfessor(k, a) {
    var count = 0;
    for (let i = 0; i <= a.length; i++) { 
        if (a[i] <= 0) {
            count++;
        } 
    }
    if (count >= k) return "NO";
    else return "YES";

}