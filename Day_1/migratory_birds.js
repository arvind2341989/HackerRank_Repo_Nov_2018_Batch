function migratoryBirds(arr) {

    var countarr = [-1, 0, 0, 0, 0, 0];
    var max = 0;
    for (var i = 0; i < arr.length; i++){
        countarr[arr[i]]++;
    }
    for (i = 1; i < 6; i++) {
        if (countarr[i] >= max) {
            max = countarr[i];
        }
    }

    for (i = 1; i < 6; i++) {
        if (countarr[i] == max) {
            return i;
        }
    }

}
