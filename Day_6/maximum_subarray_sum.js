function maximumSum(arr, mod) {
    //KADANE'S ALGORITHM
    var sum, res = [], prefixSum = [];
    for (var i = 0; i < arr.length; i++) {
        prefixSum.push({ id: i, val: ((prefixSum[i - 1] && prefixSum[i - 1].val || 0) + arr[i]) % mod });
    }
    prefixSum.sort((a, b) => a.val - b.val);
    var max = prefixSum[0].val;
    for (i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, prefixSum[i + 1].val);
        if (prefixSum[i].id > prefixSum[i + 1].id)
            max = Math.max(max, (prefixSum[i].val + mod - prefixSum[i + 1].val) % mod);
    }
    return max;
}