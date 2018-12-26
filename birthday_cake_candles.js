function birthdayCakeCandles(ar) {
    var count = 0;
    ar.sort(function (a, b) { return a - b });
    for (var i = 0; i < ar.length; i++){
       if(ar[i] == ar[ar.length - 1])
        count++;
    }
    return count;
}