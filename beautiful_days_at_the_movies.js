function beautifulDays(i, j, k) {
    var count = 0;
    for (var p = i; p <= j; p++){
        var number = "" + p;
        var reverse = number.split("").reverse().join("");
        var diff = Math.abs(parseInt(number) - parseInt(reverse));
        if (diff % k == 0) {
            count++;
        }
    }
    return count;
}