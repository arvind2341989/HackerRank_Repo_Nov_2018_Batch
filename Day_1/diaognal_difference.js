function diagonalDifference(arr) {
    var sum1 = 0; var sum2 = 0;
    var t = arr.length - 1;
    for (var i = 0; i < arr.length; i++){
        sum2 += arr[i][t];
        t--;
        for (var j = 0; j < arr.length; j++){
            if (i == j) {
                sum1 += arr[i][j];
            }    
        }
    }
    return Math.abs(sum1 - sum2);
}