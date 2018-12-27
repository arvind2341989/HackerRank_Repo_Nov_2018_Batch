function surfaceArea(A) {
    var rowLen = A.length; //row length
    var colLen = A[0].length; //column length
    //up and down
    var upAndDownSurfaceArea = rowLen * colLen * 2;
    var perimeterSurfaceArea = 0;
    var topSurfaceArea = 0;
    var i = 0, j = 0;

    for (j = 0; j < colLen; j++) {
        perimeterSurfaceArea += A[0][j]; //top
        perimeterSurfaceArea += A[rowLen - 1][j]; //bottom 
    }

    for (j = 0; j < rowLen; j++) {
        perimeterSurfaceArea += A[j][0]; //left
        perimeterSurfaceArea += A[j][colLen - 1]; //right
    }

    for (i = 0; i < rowLen; i++) {
        for (j = 0; j < colLen - 1; j++) {
            topSurfaceArea += Math.abs(A[i][j] - A[i][j + 1]); //row-wise 
        }
    }

    for (i = 0; i < colLen; i++) {
        for (j = 0; j < rowLen - 1; j++) {
            topSurfaceArea += Math.abs(A[j][i] - A[j + 1][i]); //column-wise 
        }
    }

    return upAndDownSurfaceArea + perimeterSurfaceArea + topSurfaceArea;

}