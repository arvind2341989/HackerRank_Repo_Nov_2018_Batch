function minimumDistances(a) {
    var dist = -1;
    for (var i = 0; i < a.length - 1; i++) { 
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) { 
                var k = j - i;
                j = a.length;
                if (dist == -1) {
                    dist = k;
                }
                else if (dist > k) { 
                    dist = k;
                }
                if (dist == 1) { 
                    return dist;
                }
            }
         }
    }
    return dist;
}