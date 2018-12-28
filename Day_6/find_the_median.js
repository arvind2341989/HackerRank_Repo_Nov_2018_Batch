// Complete the findMedian function below.
function findMedian(arr) {
    arr.sort((a, b) => { return a - b; });
    return arr[(arr.length-1)/2];
}