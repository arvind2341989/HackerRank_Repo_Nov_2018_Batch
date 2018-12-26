function countingValleys(n, s) {
    var level = 0;
    var i = 0;
    var count = 0;
    var len = s.length;
    while (i < len) {
        if (s.charAt(i) == 'U') {
            level++;
        }
        else {
            if (level == 0) {
                count++;
            }
            level--;
        }
        i++;
    }
    return count;
}