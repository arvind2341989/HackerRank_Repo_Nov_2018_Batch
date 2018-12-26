function getTotalX(a, b) {
    /*
     * Write your code here.
     */
    var counter = 0, flag;
    for (var i = 0; i <= 100; i++){
        flag = 1;
        for (var j = 0; j < a.length; j++){
            if (i % a[j] != 0) { flag = 0;}   
        }
        for (var j = 0; j < b.length; j++){
            if (b[j] % i != 0) { flag = 0;}
        }
        if (flag == 1) {
            counter++;
        }
    }
    return counter;
}