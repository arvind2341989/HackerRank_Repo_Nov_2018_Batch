function compareTriplets(a, b) {
    var a1 = 0;
    var b1 = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            a1 += 1;
        } else if (a[i] < b[i]) {
            b1 += 1;
        } else {
            
        }
    }
    var array = [a1, b1];
    return array;
}