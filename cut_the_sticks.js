function cutTheSticks(arr) {
    var result = [];
    var j = 0;
    while (arr.length > 0) {
        var min = Number.MAX_VALUE;
        var i = 0;
        var len = arr.length; 
        result[j] = len;
        while (i < len) {
            if (arr[i] < min) {
                min = arr[i];
            }
            i++;
        }
        i = 0;
        while (i < arr.length) {
            if (arr[i] == min) {
                arr.splice(i, 1);
            }
            else {
                arr[i] -= min;
                i++;
            }
        }
        j++;
    }
    return result;
}