function diagonalDifference(arr) {
    var diagonalDifference = 0;
    var leftDiagonal = 0;
    var rightDiagonal = 0;
    for (var i = 0; i < arr.length ; i++) { 
        leftDiagonal += arr[i][i];
    }
    var j = arr.length - 1;
    for (var i = 0; i < arr.length; i++) { 
        rightDiagonal += arr[i][j];
        j--;
    }
    if (rightDiagonal > leftDiagonal) {
       
        diagonalDifference = rightDiagonal - leftDiagonal;
    
    }
    else if (leftDiagonal > rightDiagonal) {
        
            diagonalDifference = leftDiagonal - rightDiagonal;
        
    }
    else { 
        diagonalDifference = 0;
    }
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
   
    return diagonalDifference;
}