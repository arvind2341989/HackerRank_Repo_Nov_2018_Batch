// Complete the pairs function below.
function pairs(k, arr) {
    arr.sort(function (a, b) { return a - b });
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[j] - arr[i] > k) {
                break;
            } else if (arr[j] - arr[i] == k) {
                count++;
            }
        }
    }
    return count;

}