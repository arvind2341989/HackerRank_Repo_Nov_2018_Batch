function diagonalDifference(arr) {
    var ans = 0;
    var d1 = 0;
    var d2 = 0;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i == j)
                d1 += arr[i][j];

            // finding sum of secondary diagonal 
            if (i == arr.length - j - 1)
                d2 += arr[i][j];
        }
    }
    ans = Math.abs(d1 - d2);
    return ans;


}
