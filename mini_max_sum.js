function miniMaxSum(arr) {
    arr.sort(function (a, b) { return a - b });
    var sum=0,count=0,i = 0;
    for (i = 0; i <= arr.length-2; i++){
        sum += arr[i];
    }
    for (i = 1; i <arr.length; i++) {
        count += arr[i];
    }
    
    console.log(sum,count);
    
}