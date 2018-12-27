function birthdayCakeCandles(ar) {
    var tallest = ar[0];
    var count = 0;
    for (var i = 1; i < ar.length; i++) { 
        if (tallest < ar[i]) { 
            tallest = ar[i];
        }
    }
    for (var i = 0; i < ar.length; i++) { 
        if (ar[i] == tallest) {
            count++;
         }
    }
    return count;
}