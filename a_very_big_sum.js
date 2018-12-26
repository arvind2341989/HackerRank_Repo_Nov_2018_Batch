function aVeryBigSum(ar) {
    var largeSum = 0;
    for (var i = 0; i < ar.length; i++) { 
        largeSum += ar[i];
    }
    return largeSum;
}