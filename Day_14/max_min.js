// Complete the maxMin function below.
function maxMin(k, arr) {
    arr.sort((a, b) => a - b);
    var result = arr[k - 1] - arr[0];
    for (let i = k; i < arr.length; i++)
        result = Math.min(result, arr[i] - arr[i - k + 1]);
    return result;
}