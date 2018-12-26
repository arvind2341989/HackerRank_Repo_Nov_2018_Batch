function findDigits(n) {
    var num = "" + n;
    var count = 0;
    for (var i = 0; i < num.length; i++){
        if (num[i] != 0) {
            if (num % num[i] == 0) {
                count++;
            }
        }
    }
    return count;
}