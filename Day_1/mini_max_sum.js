function miniMaxSum(arr) {
    arr.sort();
    var i, sum = 0;
    for(i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    var max = sum - arr[0];
    var min = sum - arr[arr.length - 1];
    console.log(min, max);
}