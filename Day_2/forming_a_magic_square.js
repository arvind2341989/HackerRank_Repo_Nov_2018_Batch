// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    var minCost = 45;
    var magicArr = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]]
    ];
    for (let sqCnt = 0; sqCnt < 8; sqCnt++){
        let cmpCost = 0;
        for (let i = 0; i < s.length; i++){
            for (let j = 0; j < s[i].length; j++){
                cmpCost += Math.abs(s[i][j] - magicArr[sqCnt][i][j]);
            }
        }
        if (cmpCost < minCost) minCost = cmpCost;
    }
    return minCost; 

}