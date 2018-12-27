function matrixRotation(matrix, r) {
    var rowLen = matrix.length;
    var colLen = matrix[0].length;

    var numOfCirles = Math.min(rowLen, colLen) / 2;
    for (let i = 0; i < numOfCirles; i++) {

        var numOfRotations = r % (2 * (rowLen + colLen - 4 * i) - 4);

        for (let rotation = 0; rotation < numOfRotations; rotation++) {
            for (let j = i; j < colLen - i - 1; j++) {
                let tmp = matrix[i][j];
                matrix[i][j] = matrix[i][j + 1];
                matrix[i][j + 1] = tmp;
            }

            for (let j = i; j < rowLen - i - 1; j++) {
                let tmp = matrix[j][colLen - i - 1];
                matrix[j][colLen - i - 1] = matrix[j + 1][colLen - i - 1];
                matrix[j + 1][colLen - i - 1] = tmp;
            }

            for (let j = colLen - i - 1; j > i; j--) {
                let tmp = matrix[rowLen - i - 1][j];
                matrix[rowLen - i - 1][j] = matrix[rowLen - i - 1][j - 1];
                matrix[rowLen - i - 1][j - 1] = tmp;
            }

            for (let j = rowLen - i - 1; j > i + 1; j--) {
                let tmp = matrix[j][i];
                matrix[j][i] = matrix[j - 1][i];
                matrix[j - 1][i] = tmp;
            }
        }
    }

    for (let i = 0; i < rowLen; i++) {
        var rowString = "";
        for (let j = 0; j < colLen; j++) {
            rowString += matrix[i][j] + " ";
        }
        console.log(rowString);
    }
}