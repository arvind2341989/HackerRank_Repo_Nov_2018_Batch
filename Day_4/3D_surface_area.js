// Complete the surfaceArea function below.
function surfaceArea(A,H,W) {
    var totalArea = H * W;
    var y = 0;
    var x = 0;

    for (let i = 0; i < H; i++){
        let temp = A[i][0];
        for (let j = 1; j < W; j++){
            if (A[i][j] > A[i][j - 1])
                temp += (A[i][j] - A[i][j - 1]);
        }
        y = y + temp;
    } 

    for (let i = 0; i < W; i++){
        let temp = A[0][i];
        for (let j = 1; j < H; j++){
            if (A[j][i] > A[j - 1][i])
                temp += (A[j][i] - A[j - 1][i]);
        }
        x = x + temp;
    }
    return (x + y + totalArea) * 2;

}