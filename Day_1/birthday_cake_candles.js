function birthdayCakeCandles(ar) {
    var max = ar[0];
    var sum = 0;
    for (var i = 0; i < ar.length; i++){
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    for (var i = 0; i < ar.length; i++) {
        if (ar[i]==max) {
            sum += 1;
        }
    }
    return sum;
}