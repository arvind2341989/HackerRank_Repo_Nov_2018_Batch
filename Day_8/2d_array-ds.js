function hourglassSum(arr) {
    var max = arr[0][0] + arr[0][1] + arr[0][2] + arr[1][1] + arr[2][0] + arr[2][1] + arr[2][2];
    for (let i = 0; i + 3 <= arr.length; i++){
        for (let j = 0; j + 3 <= arr[0].length; j++){
            var lmax = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (lmax > max) {
                max = lmax;
            }
        }
    }
    return max;
}