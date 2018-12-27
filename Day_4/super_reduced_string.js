function superReducedString(s) {
    var sb = s;
    var i = 0;
    var count = 1;
    while (count > 0 && sb.length > 0) {
        count = 0;
        for (i = 1; i <= sb.length - 1; i++) {
            if (sb.charAt(i) == sb.charAt(i - 1)) {
                sb = sb.substring(0, i - 1) + sb.substring(i, sb.length);
                sb = sb.substring(0, i - 1) + sb.substring(i, sb.length);
                count++;
            }
        }
    }
    if (sb.length == 0) {
        return "Empty String";
    }
    return sb;
}