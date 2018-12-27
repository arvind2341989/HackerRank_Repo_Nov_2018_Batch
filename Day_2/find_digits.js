function findDigits(n) {
    var s = n,count=0;
    while (s) { 
        var d = s % 10;
        if ((n % d) == 0) { 
            count++;
        }
        s = Math.floor(s / 10);
    }
    return count;
}