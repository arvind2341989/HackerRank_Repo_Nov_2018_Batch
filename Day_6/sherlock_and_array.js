// Complete the balancedSums function below.
function balancedSums(arr) {
    if (arr.length === 1) return "YES";
    var leftSum = 0;
    var rightSum = 0;
    for (let i = 1; i < arr.length; i++){
        rightSum = rightSum + arr[i];
    }
    for (let i = 0; i < arr.length; i++){
        if (leftSum === rightSum) return "YES";
        else if (i != arr.length - 1) {
            leftSum = leftSum + arr[i];
            rightSum = rightSum - arr[i + 1];
        } else
            leftSum = leftSum + arr[i];
    }
    return "NO";
}