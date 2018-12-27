function viralAdvertising(n) {
    var i = 0, x = 0;
    x = 2; var cum = 2;
    for (i = 2; i <= n; i++) {
        x = x * 3;
        x = parseInt(x / 2);
        cum = cum + x;
    }
    return cum;
}