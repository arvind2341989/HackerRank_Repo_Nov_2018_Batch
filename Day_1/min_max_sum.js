function miniMaxSum(arr) {
    let maxSum = 0,
        minSum = 0;
    arr.sort();

    for (var i = arr.length - 1, o = 0; i >= arr.length - 4, o < 4; i-- , o++) {
        maxSum += arr[i];
        minSum += arr[o];
    }
    console.log(minSum, maxSum)
}