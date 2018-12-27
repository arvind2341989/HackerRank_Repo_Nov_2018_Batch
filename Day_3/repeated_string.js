function repeatedString(s, n) {
    var rep = parseInt(n / s.length);
    var remainder = n % s.length;

    var remainderCount = 0;
    var answer = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c == 'a') {
            answer++;
            if (i < remainder) {
                remainderCount++;
            }
        }
    }
    answer = Math.floor((answer * rep) + remainderCount);
    return answer;
}