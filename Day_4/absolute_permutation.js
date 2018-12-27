function absolutePermutation(n, k) {
    var i = 1;
    var result = new Array(n);
    while (i <= n) {
        if (i <= k) {
            if (k + i - 1 < n) {
                result[k + i - 1] = i;
            }
            else {
                return [-1];
            }
        }
        else {
            if (result[i - k - 1] == 0) {
                result[i - k - 1] = i;
            }
            else {
                if (k + i - 1 < n) {
                    result[k + i - 1] = i;
                }
                else {
                    return [-1];
                }
            }
        }
        i++;
    }
    return result;
}