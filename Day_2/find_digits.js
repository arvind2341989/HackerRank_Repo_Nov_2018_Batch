function findDigits(n) {
    var count = 0;
    var temp = 0;
    var num = n;
    while (n > 0) {
        temp = n % 10;
        if (num % temp == 0) count++;
        n = parseInt(n / 10);
    }
    return count;
}