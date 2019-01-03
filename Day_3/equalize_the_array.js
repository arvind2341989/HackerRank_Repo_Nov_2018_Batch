function equalizeArray(arr) {
    arr.sort(function (a, b) { return a - b; })
    var maxCount = 1;
    var maxOccurrence = Number.MIN_VALUE;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            maxCount++;
            if (maxOccurrence < maxCount) {
                maxOccurrence = maxCount;
            }
        }
        else {
            if (maxOccurrence < maxCount) {
                maxOccurrence = maxCount;
            }
            maxCount = 1;
        }
    }
    return arr.length - maxOccurrence;
}