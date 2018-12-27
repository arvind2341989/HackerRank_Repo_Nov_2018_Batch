function diagonalDifference(arr) {
    var sumFirstDiagonal = 0;
    var sumSecondDiagonal = 0;
    var diagonalDifference = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sumFirstDiagonal = sumFirstDiagonal + arr[i][i];
        sumSecondDiagonal = sumSecondDiagonal + arr[arr.length - 1 - i][i];
        diagonalDifference = sumFirstDiagonal - sumSecondDiagonal;
    }
    return Math.abs(diagonalDifference);
}