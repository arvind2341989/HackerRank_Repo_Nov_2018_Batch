function miniMaxSum(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) { 
        sum += arr[i];
        if (min > arr[i]) {
            min = arr[i];
        }
        else if (max < arr[i]) { 
            max = arr[i];
        }
    }
    var minSum = sum - max;
    var maxSum = sum - min;
    console.log(minSum + " " + maxSum);

}