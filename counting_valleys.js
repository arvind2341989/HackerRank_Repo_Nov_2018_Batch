function countingValleys(n, s) {
    var valleys = 0;

    var lev = 0;
    for (var i = 0; i < n; i++) {
        if (s[i] == 'U') {
            lev = lev + 1;
        }
        else if (s[i] == 'D') {
            lev = lev - 1;
        }
        if (lev == 0 && s[i] == 'U')
        {
            valleys++;
        }
    }
    return valleys;
}