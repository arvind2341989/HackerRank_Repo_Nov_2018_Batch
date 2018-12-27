function sockMerchant(n, ar) {
    var pairs = 0;
    ar.sort(function (a, b) { return a - b });
    for (let i = 0; i < n; i++) { 
        if (ar[i] == ar[i + 1]) { 
            pairs++;
            i++;
        }
    }
    return pairs;
}
