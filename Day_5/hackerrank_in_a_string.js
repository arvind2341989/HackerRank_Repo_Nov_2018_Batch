function hackerrankInString(s) {
    var hackerrank = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
    var i = 0, j = 0;
    while (j < hackerrank.length && i < s.length) {
        if (s.charAt(i) == hackerrank[j]) {
            j++;
        }
        i++;
    }
    if (j == hackerrank.length) {
        return "YES";
    }
    return "NO";
}