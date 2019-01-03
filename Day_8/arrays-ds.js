function reverseArray(a) {
    var i, k, t;
    var n = a.length;
    for (i = 0; i < n / 2; i++) {
        t = a[i];
        a[i] = a[n - i - 1];
        a[n - i - 1] = t;
    } 
    return a;

}