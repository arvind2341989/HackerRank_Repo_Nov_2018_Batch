function diagonalDifference(arr) {
    var i, diagonal_1_sum = 0, diagonal_2_sum = 0;
    for (i = 0; i < arr.length; i++) {
        diagonal_1_sum = diagonal_1_sum + arr[i][i];
        diagonal_2_sum = diagonal_2_sum + arr[arr.length - 1 - i][i];

    }
    return Math.abs(diagonal_1_sum - diagonal_2_sum);
}