function superReducedString(s) {
    for (var i = 1; i < s.length; i++) {
        if (s.charAt(i) == s.charAt(i - 1)) {
            s = s.substr(0, i - 1) + s.substr(i + 1);
            i = 0;
        }
    }
    if (s.length == 0) {
        return "Empty String";
    } else {
        return s;
    }

}