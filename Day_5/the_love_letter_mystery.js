function theLoveLetterMystery(s) {
    var i, j, count = 0, length = s.length;
    for (i = 0, j = length - 1; i < length / 2 && j >= length / 2; i++ , j--) {
        count += Math.abs(s.charAt(i).charCodeAt(0) - s.charAt(j).charCodeAt(0));
    }
    return count;
}