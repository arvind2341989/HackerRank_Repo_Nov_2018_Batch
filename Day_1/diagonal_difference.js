function diagonalDifference(arr) {
    var row, col;
    var diagSum1 = 0;
    var diagSum2 = 0;
    var absDiff = 0;
    for (let i = 0; i < arr.length; i++){
        diagSum1 = diagSum1 + arr[i][i];
        diagSum2 = diagSum2 + arr[i][arr.length - i - 1]; 
    }
	absDiff = Math.abs(diagSum1 - diagSum2);
    return absDiff;
}