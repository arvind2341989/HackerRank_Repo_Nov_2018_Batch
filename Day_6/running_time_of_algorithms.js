function runningTime(arr) {
    var swapCount = 0;
    for (var i = 1; i < arr.length; i++) {
        var j = i;
        var key = arr[i];
        while (j >= 1 && arr[j - 1] > key) {
            arr[j] = arr[j - 1];
            j--;
            swapCount++;
        }
        arr[j] = key;
    }
    return swapCount;
}