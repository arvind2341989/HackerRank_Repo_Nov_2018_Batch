// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    var counter = 0;
    var temp = [];
    var j = 0; 
    arr.sort(function (a, b) { return b - a; });
    while (arr.length > 0) {
        var i = arr.length - 1;
        temp[j] = arr.length;
        if (arr[i] !== arr[i - 1]) {
            arr.pop();
            i--;
        }
        else {
            while (arr[i] === arr[i - 1]) {
                arr.pop();
                i--;
            }
            arr.pop();
        }
        j++;
    }
    return temp;
}