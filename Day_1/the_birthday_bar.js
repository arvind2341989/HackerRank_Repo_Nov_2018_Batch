function birthday(s, d, m) {
    var len = s.length;
    var count = 0, result = 0;
    for (var i = 0; i <= len - m; i++){
        var k = i;
        var j = i + m - 1;
        count = 0;
        while (k <= j) {
            count += s[k];
            k++;
        }
        if (count == d) {
            result++;
        }
    }
    return result;
}