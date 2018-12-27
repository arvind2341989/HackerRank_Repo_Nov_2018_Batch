function superReducedString(s) {
    var i = 0;
    for (i = 1; i < s.length; i++) {
        if (s[i -1] == s[i]) {
            s = s.substring(0, i - 1) + s.substring(i + 1);
            i = 0;
        }
    }
    if (s.length == 0) {
        return ("Empty String");
    }
    return s;
}