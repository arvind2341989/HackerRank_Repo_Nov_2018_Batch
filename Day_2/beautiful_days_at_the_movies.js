function beautifulDays(i, j, k) {
    var count=0,a1,a2=0;
    for (var a = i; a <= j; a++){
        a1 = a.toString();
        a2 = parseInt(a1.split("").reverse().join(""));
        if (Math.abs(a - a2) % k == 0) {
            count++;
        }
    }
    return count;
}