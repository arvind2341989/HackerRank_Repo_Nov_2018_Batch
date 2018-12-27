// Complete the cavityMap function below.
function cavityMap(grid) {
    for (let i = 1; i < grid.length - 1; i++){
        grid[i].split("");
        for (let j = 1; j < grid[i].length - 1; j++){
            if ((parseInt(grid[i][j]) > parseInt(grid[i - 1][j])) && (grid[i - 1][j] != 'X') &&
                (parseInt(grid[i][j]) > parseInt(grid[i + 1][j])) && (grid[i + 1][j] != 'X') &&
                (parseInt(grid[i][j]) > parseInt(grid[i][j - 1])) && (grid[i][j - 1] != 'X') &&
                (parseInt(grid[i][j]) > parseInt(grid[i][j + 1])) && (grid[i][j + 1] != 'X')) {

                grid[i] = grid[i].substr(0, j) + "X" + grid[i].substr(j + 1);
            }
        }
    }
    return grid;

}