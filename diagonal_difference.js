function diagonalDifference(arr) {

    var i, diagnol_1 = 0, diagnol_2 = 0;
    for (i = 0; i < arr.length; i++)
    {
        diagnol_1 = diagnol_1 + arr[i][i];
        diagnol_2 = diagnol_2 + arr[arr.length - 1 - i][i];
    }

    return Math.abs(diagnol_1 - diagnol_2);
}