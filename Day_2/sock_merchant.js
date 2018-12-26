function sockMerchant(n, ar) {
    var count = 0;
    ar.sort(function (a, b) { return a - b; });
    for (let i = 0; i < n; i++){
        if (ar[i] == ar[i + 1]) {
            count++;
            i++;
        }
        else continue;
    }
    return count;

}