function formingMagicSquare(s) {
    // 8 1 6
    // 3 5 7
    // 4 9 2
    var m1 = [[ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ]];
    var m2 = [[ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ]];
    var m3 = [[ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ]];
    var m4 = [[ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ]];
    var m5 = [[ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ]];
    var m6 = [[ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ]];
    var m7 = [[ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ]];
    var m8 = [[ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ]];
    var sum = [0, 0, 0, 0, 0, 0, 0, 0];
    sum.length = 8;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            sum[0] += Math.abs(s[i][j] - m1[i][j]);
            sum[1] += Math.abs(s[i][j] - m2[i][j]);
            sum[2] += Math.abs(s[i][j] - m3[i][j]);
            sum[3] += Math.abs(s[i][j] - m4[i][j]);
            sum[4] += Math.abs(s[i][j] - m5[i][j]);
            sum[5] += Math.abs(s[i][j] - m6[i][j]);
            sum[6] += Math.abs(s[i][j] - m7[i][j]);
            sum[7] += Math.abs(s[i][j] - m8[i][j]);
        }
    }
    var min = Number.MAX_VALUE;
    for (var i = 0; i < sum.length; i++){
        if (sum[i] < min) {
            min = sum[i];
        }
    }
    return min;
}