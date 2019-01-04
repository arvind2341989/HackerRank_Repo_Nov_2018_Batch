function bomberMan(n, grid) {
    let r = grid.length;
    let c = grid[0].length;

    let matrix = Array.from(Array(r), () => new Array(c));
    for (let i = 0; i < r; i++) {
        matrix[i] = grid[i].split('');
    }

    let newMatrix = Array.from(Array(r), () => new Array(c));
    let newMatrix2 = Array.from(Array(r), () => new Array(c));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            newMatrix[i][j] = 'O';
            newMatrix2[i][j] = 'O';
        }
    }

    if (n % 2 == 1) {
        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (matrix[i][j] == 'O') {
                    newMatrix[i][j] = '.';
                    if (i - 1 >= 0) {
                        newMatrix[i - 1][j] = '.';
                    }
                    if (i + 1 < r) {
                        newMatrix[i + 1][j] = '.';
                    }
                    if (j - 1 >= 0) {
                        newMatrix[i][j - 1] = '.';
                    }
                    if (j + 1 < c) {
                        newMatrix[i][j + 1] = '.';
                    }
                }
            }
        }

        for (let i = 0; i < r; i++) {
            for (let j = 0; j < c; j++) {
                if (newMatrix[i][j] == 'O') {
                    newMatrix2[i][j] = '.';
                    if (i - 1 >= 0) {
                        newMatrix2[i - 1][j] = '.';
                    }
                    if (i + 1 < r) {
                        newMatrix2[i + 1][j] = '.';
                    }
                    if (j - 1 >= 0) {
                        newMatrix2[i][j - 1] = '.';
                    }
                    if (j + 1 < c) {
                        newMatrix2[i][j + 1] = '.';
                    }
                }
            }
        }
    }
    if (n == 1) {
        return grid;
    } else if (n % 4 == 1) {
        let newMatrixTwo = new Array(r);
        for (let i = 0; i < r; i++) {
            let row = "";
            for (let j = 0; j < c; j++) {
                row += newMatrix2[i][j];
            }
            newMatrixTwo[i] = row;
        }
        return newMatrixTwo;
    } else {
        //newMatrix
        let newMatrixOne = new Array(r);
        for (let i = 0; i < r; i++) {
            let row = "";
            for (let j = 0; j < c; j++) {
                row += newMatrix[i][j];
            }
            newMatrixOne[i] = row;
        }
        return newMatrixOne;
    }
}