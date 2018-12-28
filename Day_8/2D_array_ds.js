// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var hourSumArr = [];
    var counter = 0;

    for (let i = 1; i < arr.length - 1; i++){
        for (let j = 1; j < arr[i].length - 1; j++){
            hourSumArr[counter++] = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
        }
    }
    return Math.max(...hourSumArr);
}