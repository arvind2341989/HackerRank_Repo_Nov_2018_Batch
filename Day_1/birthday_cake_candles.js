function birthdayCakeCandles(ar) {
    var n = ar.length;
    var i = 0, count = 0;
    var max = Number.MIN_VALUE;
    for(i = 0; i < n; i++){
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    for (i = 0; i < n; i++) {
        if (ar[i] == max) {
            count++;
        }
    }
    return count;
}