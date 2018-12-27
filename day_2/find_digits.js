function findDigits(n) {
    var j = 0, count = 0, div = n.toString();
    for (j = 0; j < div.length; j++) {
        var a = parseInt(div[j]);
        if (n % a == 0) {
            count++;
        }
    }
    return count;

}
