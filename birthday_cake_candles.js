function birthdayCakeCandles(ar) {
    var max = ar[0];
    var maxCount = 0;
    for (var i = 1; i < ar.length; i++) {
        if (max < ar[i]) { 
            max = ar[i];
        }
        
    }

    for (var i = 0; i < ar.length; i++) { 
        if (max == ar[i]) { 
            maxCount += 1;
        }
    }

    return maxCount;
}