function countingValleys(n, s) {
    var valleys = 0;

    var count = 0;
    for (var i = 0; i < n; i++) {
        if (s[i] == 'U') {
            count = count + 1;
        }
        else if (s[i] == 'D') {
            count = count - 1;
        }
        if (count == 0 && s[i] == 'U') {
            valleys++;
        }
    }
    return valleys;
}
