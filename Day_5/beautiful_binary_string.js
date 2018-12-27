function beautifulBinaryString(b) {
    if (!b.includes("010")) {
        return 0;
    }
    else {
        var sb = b;
        var i = 0, count = 0;
        while (sb.includes("010") && i < sb.length) {
            if (sb.charAt(i) == '0' && sb.charAt(i + 1) == '1' && sb.charAt(i + 2) == '0') {
                sb = sb.substring(0, i + 2) + '1' + sb.substring(i + 3, sb.length);
                count++;
            }
            i++;
        }
        return count;
    }
}