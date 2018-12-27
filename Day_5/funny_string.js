function funnyString(s) {
    var i;
    var res = "Funny";
    var sb = s;
    var reverse = sb.split('').reverse().join('');
    var absActual = 0, absReverse = 0;

    for (i = 1; i < s.length; i++) {
        absActual = absActual + Math.abs(s.charAt(i).charCodeAt(0) - s.charAt(i - 1).charCodeAt(0));
        absReverse = absReverse + Math.abs(reverse.charAt(i).charCodeAt(0) - reverse.charAt(i - 1).charCodeAt(0));
        if (absActual != absReverse) {
            return "Not Funny";
        }
    }
    return res;
}