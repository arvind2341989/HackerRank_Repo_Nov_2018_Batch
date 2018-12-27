function repeatedString(s, n) {
    var k = Math.floor(n / s.length), count = 0, l;
    l = n % s.length;
    var g = s.match(/a/g);
    if (n >= s.length && g != null) {
        count = (k * g.length);
    }
    for (var i = 0; i < l; i++) {
        if (s[i] == 'a') {
            count++;
        }
    }
    return count;
}