function diagonalDifference(arr) {

    var firstdiagonal = 0;
    var seconddiagonal = 0;
    for (var i = 0; i < arr.length; i++){
        firstdiagonal += arr[i][i];
        seconddiagonal += arr[arr.length - i - 1][i];
    }
    return Math.abs(seconddiagonal - firstdiagonal);
}
