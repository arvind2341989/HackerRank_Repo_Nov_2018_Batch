function camelcase(s) {
    var i, count = 0;
    for (i in s) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            count++;
        }
    }
    return count + 1;
}