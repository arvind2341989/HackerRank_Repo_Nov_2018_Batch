function repeatedString(s, n) {

    var count = 0;
    for (var i = 0; i < s.length; i++)
        if (s[i] == 'a')
            count++;

    var factor = parseInt(n / s.length);
    var rem = (n % s.length);
    count = factor * count;
    for (var i = 0; i < rem; i++)

        if (s[i] == 'a')
            count++;
    return count;
}