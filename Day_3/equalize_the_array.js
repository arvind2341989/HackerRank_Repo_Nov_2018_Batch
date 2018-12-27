function equalizeArray(arr) {
    arr.sort(function (a, b) { return a - b; });
    var count = 1, dummy = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            if (dummy < count) {
                dummy = count;
                count = 1;
            }
            else {
                count = 1;
            }
        }
        else {
            count++;
        }
    }
    if (dummy < count) {
        dummy = count;
    }
    var x = arr.length - dummy;
    return x;
}