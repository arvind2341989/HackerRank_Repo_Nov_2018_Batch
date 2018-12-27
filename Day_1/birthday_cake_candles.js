function birthdayCakeCandles(ar) {
    ar.sort(function (a, b) { return b - a; });
    var max = ar[0];
    var count = 0;
    while (ar[count] == max) {
        count++;
    }
    return count;
}