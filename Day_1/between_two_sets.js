function getTotalX(a, b) {
    var count = 0, flag;
    for (var i = 0; i <= 100; i++) {
        flag = 0; 
        for (var j = 0; j < a.length; j++) { 
            if (i % a[j] != 0) {
                flag=1;
             }
        }
        for (j = 0; j < b.length; j++) { 
            if (b[j] % i != 0) { 
                flag=1;
            }
        }
        if (flag == 0) { 
            count++;
        }
    }
    return count;
}