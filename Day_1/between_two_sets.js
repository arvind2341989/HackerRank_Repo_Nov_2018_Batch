function getTotalX(a, b) {
    //since constraints are 1 <= a,b <= 100, I'm using brute force
    var blen = b.length;
    var alen = a.length;
    var result = 0;
    var factorsForB = [];
    for (var i = 1; i <= 100; i++){
        var count = 0;
        for (var j = 0; j < blen; j++){
            if (b[j] % i == 0) {
                count++;
            }
        }
        if (count == blen) {
            count = 0;
            for (var k = 0; k < alen; k++){
                if (i % a[k] == 0) {
                    count++;
                }
            }
            if (count == alen) {
                result++;
            }
        }
    }
    return result;
}