function camelcase(s) {
    var i = 0, count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == s[i].toUpperCase()) {
            count++;
        }
    }
    return count + 1;
}