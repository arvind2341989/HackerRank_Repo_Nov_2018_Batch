function quickSort(arr) {
    var pivot = arr[0];
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        if (pivot > arr[i]) {
            for (var j = i; j > 0; j--) {
                var temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;


}