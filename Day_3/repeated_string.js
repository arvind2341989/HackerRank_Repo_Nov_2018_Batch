function repeatedString(s, n) {
    var i = 0;
    var len = s.length;
    var numOfTimes = parseInt(n / len);
    var remainder = n % len;
    var count = 0;
    var sum = 0;
    while (i < len) {
        if (s.charAt(i) == 'a') {
            count++;
        }
        i++;
    }
    sum += numOfTimes * count;
    for (i = 0; i < remainder; i++) {
        if (s.charAt(i) == 'a') {
            sum++;
        }
    }
    return sum;
}