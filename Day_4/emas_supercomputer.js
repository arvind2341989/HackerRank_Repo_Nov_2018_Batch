
// Complete the twoPluses function below.
function twoPluses(g) {
    let N = g.length;
    let M = g[0].length;
    let grid = Array.from(Array(N), () => new Array(M));
    let maxArea = 0;

    for (let i = 0; i < N; i++) {
        let j = 0;
        for (let c in g[i].split('')) {
            grid[i][j] = g[i].charAt(c);
            j++;
        }
    }

    var largestProduct = 1;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'G') {
                var cross1MaxArmLength = findLargestCrossFromPoint(i, j, grid);
                for (var cross1ArmLength = 0; cross1ArmLength <= cross1MaxArmLength; cross1ArmLength++) {
                    var updatedGrid = removeCross(i, j, cross1ArmLength, grid);
                    var cross2ArmLength = findLargestCross(updatedGrid);
                    var crossProduct = (cross2ArmLength * 4 + 1) * (cross1ArmLength * 4 + 1);
                    if (crossProduct > largestProduct) {
                        largestProduct = crossProduct;
                    }
                }

            }
        }
    }

    return largestProduct;
}


function findLargestCross(grid) {
    var longestArmLength = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'G') {
                var currentArmLength = findLargestCrossFromPoint(i, j, grid);
                if (currentArmLength > longestArmLength) {
                    longestArmLength = currentArmLength;
                }
            }
        }
    }
    return longestArmLength;
}

function removeCross(i, j, armLength, grid) {
    var updatedGrid = JSON.parse(JSON.stringify(grid));
    for (var n = 0; n <= armLength; n++) {
        updatedGrid[i][j + n] = 'B';
        updatedGrid[i][j - n] = 'B';
        updatedGrid[i + n][j] = 'B';
        updatedGrid[i - n][j] = 'B';
    }
    return updatedGrid;
}

function findLargestCrossFromPoint(i, j, grid) {
    var maxDimension = Math.max(grid.length, grid[0].length);
    for (var armLength = 1; armLength < maxDimension; armLength++) {
        if (!checkArmLength(i, j, grid, armLength)) return armLength - 1;
    }
}

function checkArmLength(i, j, grid, armLength) {
    if (i - armLength < 0) return false;
    if (i + armLength >= grid.length) return false;
    if (j - armLength < 0) return false;
    if (j + armLength >= grid[0].length) return false;

    if (grid[i - armLength][j] === 'B') return false;
    if (grid[i + armLength][j] === 'B') return false;
    if (grid[i][j - armLength] === 'B') return false;
    if (grid[i][j + armLength] === 'B') return false;

    return true;
}