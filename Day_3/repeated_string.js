function repeatedString(s, n) {
    var k = parseInt(n / s.length),i = 0;
    var l = n % s.length, count = 0, count_s = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i] == 'a') {
            count++;
            if (i < l) {
                count_s++;
            }
        }
    }
    return k * count + count_s;
}