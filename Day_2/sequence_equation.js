function permutationEquation(p) {
    var a = [];
    for (var i = 1; i <= p.length; i++) {
        var k = p.indexOf((i)) + 1;
        k = p.indexOf(k) + 1;
        a[i - 1] = k;
     }
    return a;
}