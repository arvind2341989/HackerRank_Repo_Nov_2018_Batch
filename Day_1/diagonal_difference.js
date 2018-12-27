function diagonalDifference(arr) {
    var n = arr.length;
    var firstDiagonalSum = 0;
    var secondDiagonalSum = 0;
    for (var i = 0; i < n; i++){
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][n - 1 - i];
    }
    return Math.abs(firstDiagonalSum - secondDiagonalSum);
}