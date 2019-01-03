function birthday(s, d, m) {
    var ans = 0;
    var counter = 0;
    for (var i = 0; i < s.length; i++) {
        var sum = s[i];
        for (var j = 1; j < m; j++) {
            sum = sum + s[i + j];
        }
        if (sum == d) {
            counter++;
        }
    }

    return counter;
}