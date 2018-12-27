function circularArrayRotation(a, k, queries) {
    var temp = 0, k1 = 0;
    var b = [];
    k = k % a.length;
    k1 = ((a.length) - k) % a.length;
    for (var i = 0; i < queries.length; i++) {
        b.push(a[(queries[i] + k1) % a.length]);
    }
    return b;

}