function camelcase(s) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90)
            count++;
    }
    return count + 1;
}