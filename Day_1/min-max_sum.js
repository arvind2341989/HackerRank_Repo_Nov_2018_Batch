function miniMaxSum(arr) {
    var sum = 0;
    var min = arr[0]; var max = arr[arr.length - 1];
    for (var j = 0; j < arr.length; j++){
        if (arr[j] < min) {
            min = arr[j];
        }
    }
    for (var k = 0; k < arr.length; k++) {
        if (arr[k] >max) {
            max = arr[k];
        }
    }
    for (var i = 0; i < arr.length;i++){
        sum += arr[i];
    }
    var smin = sum - max;
    var smax = sum - min;
    console.log(smin, smax);
}