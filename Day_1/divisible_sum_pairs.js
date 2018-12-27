function divisibleSumPairs(n, k, ar) {
    //ar.sort(function (a, b) { return a - b });
    var i = 0, j = 0,count=0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < i; j++) {
            if ((ar[i] + ar[j]) % k == 0) {
                count++;
            }
        }
    }
    return count;
}