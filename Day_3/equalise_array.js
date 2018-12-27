function equalizeArray(arr) {
    arr.sort(function (a, b) { return a - b });
    var j = 0, count = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[j] != arr[i]) {
            j++;
            count++;
        }
    }
    return count;
}