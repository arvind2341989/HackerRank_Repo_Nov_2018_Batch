function circularArrayRotation(a, k, queries) {
    var result = [];
    var len = queries.length;
    var n = a.length;
    var i = 0;
    while (i < len) {
        result.push(a[(n - (k % n) + queries[i]) % n]);
        i++;
    }
    return result;
}