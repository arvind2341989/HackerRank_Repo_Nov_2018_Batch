function minimumDistances(a) {
    var res = [];
    for (var i = 0; i < a.length; i++){
        for (var j = i+1; j < a.length; j++){
            if (a[i] == a[j]) {
                res.push(Math.abs(j - i));
                
            } else {
                
            }
        }
    }if (res.length != 0) {
        return Math.min.apply(null, res);
    } else {
        return -1;
    }
}