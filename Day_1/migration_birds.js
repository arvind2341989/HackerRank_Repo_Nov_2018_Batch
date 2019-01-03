function migratoryBirds(arr) {
    var i, j, k, count = 0, max = 0;
    for (k = 1; k <= 6; k++) {
        count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == k) count++;
        }
        if (max < count) {
            max = count;
            j = k;
        }
    }
    return j;
}