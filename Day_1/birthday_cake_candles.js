function birthdayCakeCandles(ar) {
    var i, max = 0, count = 0;
    for (i = 0; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    for (i = 0; i < ar.length; i++) {
        if (ar[i] == max) {
            count++;
        }
    }
    return count;
}
