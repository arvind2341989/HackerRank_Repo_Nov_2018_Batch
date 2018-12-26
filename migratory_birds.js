function migratoryBirds(arr) {
    arr.sort();
    var p1 = 0;
    var count = 1;
    var maxCount = 0;
    var index = 0;
    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i] == arr[i + 1]) {
            count++;
        }
        else {
            count = 1;
        }
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }
    }
    return arr[index];
}