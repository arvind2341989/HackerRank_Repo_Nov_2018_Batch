function findDigits(n){
    var i = 0, j = 0, count = 0;
    var output = [], k = n.toString();

    for (; i < k.length; i++) {
        output.push(+k.charAt(i));
    }
    for (i = 0; i < output.length; i++) {
        if ((n % output[i]) == 0) {
            count++;
        }
    }
    return count;
}