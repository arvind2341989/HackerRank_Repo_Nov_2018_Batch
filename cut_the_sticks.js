function cutTheSticks(arr) {
    arr.sort(function (a, b) { return a - b });
    var result = [];
    var count = 0;
    if (arr.length <= 1000) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                for (var j = i + 1; j < arr.length; j++) {
                    arr[j] = (arr[j] - arr[i]);
                    count++;
                }
                result.push(count + 1);
                count = 0;
            }
        }
    }
    return result;

}
