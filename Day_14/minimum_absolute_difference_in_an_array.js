
// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    arr = arr.sort(function (a, b) { return a - b; });
    let val, diff = Number.MAX_VALUE;
    for (let num of arr) {
        if (val != undefined)
            diff = Math.min(diff, Math.abs(val - num));
        val = num;
    }
    return diff;
}