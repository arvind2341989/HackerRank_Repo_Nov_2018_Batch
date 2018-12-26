function beautifulDays(i, j, k) {
    var beautiful = 0, cal;
    for (i; i <= j; i++) { 
        var a = i;
        var d = 0;
        while(a) { 
            var s = a % 10;
            d = (d * 10) + s;
            a = Math.floor(a / 10);
        }
        if ((Math.abs(d - i)) % k == 0) { 
            beautiful++;
        }
    }
    return beautiful;
}