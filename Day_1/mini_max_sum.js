function miniMaxSum(arr) {
    arr.sort();
    var min = arr[0] + arr[1] + arr[2] + arr[3]; 
    var max = arr[4] + arr[3] + arr[2] + arr[1];
    console.log(min + " " + max);
}