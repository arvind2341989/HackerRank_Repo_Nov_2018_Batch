function miniMaxSum(arr) {
    arr.sort(function (a, b) { return a - b });
    var minSum = 0;
    var maxSum = 0;
    for (let i = 0; i < arr.length - 1; i++) minSum = minSum + arr[i];
    for (let i = 1; i < arr.length; i++) maxSum = maxSum + arr[i];
    console.log(minSum + " " + maxSum);
}