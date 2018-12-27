function divisibleSumPairs(n, k, ar) {
    var count = 0;
    for (let i = 0; i < n-1; i++){
        for (let j = i+1; j < n; j++){
            if ((ar[i] + ar[j]) % k === 0) count++;
            else continue;
        }
    }
    return count;

}