var rows = matrix.length;
    var columns = matrix[0].length;

    var numRings = Math.min(rows, columns) / 2;
    for (let i = 0; i < numRings; i++) {

        var numRotations = r % (2 * (rows + columns - 4 * i) - 4);
        for (let rotation = 0; rotation < numRotations; rotation++) {


            for (let j = i; j < columns - i - 1; j++) {
                let tmp = matrix[i][j];
                matrix[i][j] = matrix[i][j + 1];
                matrix[i][j + 1] = tmp;
            }

            for (let j = i; j < rows - i - 1; j++) {
                let tmp = matrix[j][columns - i - 1];
                matrix[j][columns - i - 1] = matrix[j + 1][columns - i - 1];
                matrix[j + 1][columns - i - 1] = tmp;
            }

            for (let j = columns - i - 1; j > i; j--) {
                let tmp = matrix[rows - i - 1][j];
                matrix[rows - i - 1][j] = matrix[rows - i - 1][j - 1];
                matrix[rows - i - 1][j - 1] = tmp;
            }

            for (let j = rows - i - 1; j > i + 1; j--) {
                let tmp = matrix[j][i];
                matrix[j][i] = matrix[j - 1][i];
                matrix[j - 1][i] = tmp;
            }
        }
    }


    for (let i = 0; i < rows; i++) {
        var rowStr = "";
        for (let j = 0; j < columns; j++) {
            rowStr += matrix[i][j] + " ";
        }
        console.log(rowStr);
    }