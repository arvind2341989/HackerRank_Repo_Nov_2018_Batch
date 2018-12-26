function divisibleSumPairs(n, k, ar) {
    //since constraints are <= 100, we can use brute-force
    var result = 0;
    for (var i = 0; i < ar.length; i++) {
        for (var j = i + 1; j < ar.length; j++) {
            var sum = ar[i] + ar[j];
            var value = sum / k;
            if (!isNaN(value)) {
                var x = parseFloat(value);
                if ((x | 0) === x) {
                    result++;
                }
            }
        }
    }
    return result;
}