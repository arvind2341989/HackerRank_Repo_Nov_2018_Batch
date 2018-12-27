function connectedCell(matrix) {
    //const connectedCell = matrix => {
    matrix.unshift(Array(matrix[0].length).fill(0))
    matrix.push(Array(matrix[0].length).fill(0))

    matrix.forEach(row => {
        row.unshift(0)
        row.push(0)
    })

    let max = 0;

    const check = (row, col) => {
        let temp = 1;

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (matrix[i][j] === 1) {
                    matrix[i][j] = 0
                    row = i;
                    col = j;
                    temp += check(row, col)
                }
            }
        }

        return temp;
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                let area = check(row, col) - 1;
                max = area > max ? area : max;
            }
        }
    }

    return max;
}

