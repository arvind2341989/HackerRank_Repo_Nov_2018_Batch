function marsExploration(s) {
    var i = 0;
    var count = 0;
    while (i < s.length) {
        if (s.charAt(i) != 'S') {
            count++;
        }
        i++;
        if (s.charAt(i) != 'O') {
            count++;
        }
        i++;
        if (s.charAt(i) != 'S') {
            count++;
        }
        i++;
    }
    return count;
}