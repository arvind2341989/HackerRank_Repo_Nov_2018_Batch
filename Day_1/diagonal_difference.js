function diagonalDifference(arr) {
    var a = 0, b = 0;
    for (var i = 0; i < arr[0].length; i++) { 
        for (var j = 0; j < arr[0].length; j++) {
            if (i == j) {
                a = a + arr[i][j];
            }
            if ((i + j) == arr[0].length - 1) {
                b = b + arr[i][j];
            }
        } 
    }
    return (a > b) ? a - b : b - a;
}