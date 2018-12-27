function formingMagicSquare(s) {
    var arr = [];
    arr = s[0];
    arr = arr.concat(s[1],s[2]);
    var allsquares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];
    
    var cost = Math.min();
    for (let j = 0; j < allsquares.length; j += 1) {
        let currCost = 0;
        for (var i = 0; i < 9; i += 1) {
            currCost += Math.abs(allsquares[j][i] - arr[i]);
        }
        if (currCost < cost) {
            cost = currCost;
        }
    }
    return cost;

}