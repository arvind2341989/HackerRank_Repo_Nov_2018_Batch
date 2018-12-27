function cutTheSticks(arr) {
    var res = [];
    var start = 0;
    arr.sort(function (a, b) { return a - b; }
    );
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            for (var j = i + 1; j < arr.length; j++) {
                arr[j] = arr[j] - arr[i];
                start++;
            }
            res.push(start + 1);
            start = 0;
        }
    }
    return res;;
}