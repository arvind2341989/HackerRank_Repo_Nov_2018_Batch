function divisibleSumPairs(n, k, ar) {
    var count = 0;
    var k;
    for (var i in ar) {
        for (var j in ar) {
            if (i < j && (ar[i] + ar[j]) % k == 0) {
                count = count+1;
            }
        }
    }
    return count;



}