// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort(function (a, b) { return a - b });
    var count = 0, i = 0;
    for (i = 0; i < n; i++){
        if (ar[i] == ar[i + 1]) {
            i++;
            count++;
        }
            }
    return count;
}
