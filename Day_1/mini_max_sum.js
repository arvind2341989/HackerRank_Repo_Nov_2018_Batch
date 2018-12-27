function miniMaxSum(arr) {
    var sum=0;
    for (var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    var temp = arr.sort();
    var min = sum - temp[temp.length - 1];
    var max = sum - temp[0];
    console.log(min, max);
}