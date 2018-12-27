// Complete the absolutePermutation function below.
function absolutePermutation(n, k) {
    var aPermutation = [];
    if (k === 0) {
        for (let i = 1; i <= n; i++){
            aPermutation.push(i);
        }
    } else if ((n % (2 * k)) == 0) {
        for (let i = 1; i <= n; i++){
            aPermutation.push(i + k);
            if (i % k === 0) {
                k = 0 - k;
            }
        }
    } else {
        aPermutation.push(-1);
    }
    return aPermutation;
}