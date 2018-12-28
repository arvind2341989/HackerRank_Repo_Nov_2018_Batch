// Complete the closestNumbers function below.
function closestNumbers(arr) {
    var min = Number.MAX_VALUE;
    var cur;
    var resArr = [];
    arr.sort((a, b) => { return a - b; });
    for (let i = 0; i < arr.length; i++){
        cur = arr[i] - arr[i - 1];
        if (cur < min) {
            min = cur;
            resArr.length = 0;
            resArr.push(arr[i - 1]);
            resArr.push(arr[i]);
        }
        else if (cur === min) {
            resArr.push(arr[i - 1]);
            resArr.push(arr[i]);
        }
    }
    return resArr;
}