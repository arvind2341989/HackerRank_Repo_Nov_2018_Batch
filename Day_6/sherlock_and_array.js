// Complete the balancedSums function below.
function balancedSums(arr) {
    var len = arr.length;
    var j = len - 1;
    var i = 0, sum1 = 0, sum2 = 0;
    while (i < len && j >= 0) {
        if (sum1 == sum2 && ((i - j) == 0)) {
            return "YES";
        } else if (sum1 < sum2) {
            sum1 += arr[i++];
        } else {
            sum2 += arr[j--];
        }
    }
    return "NO";

}