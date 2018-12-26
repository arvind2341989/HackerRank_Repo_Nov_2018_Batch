
    function migratoryBirds(arr) {
        var i = 0, ar = [0, 0, 0, 0, 0, 0], max = 0;
        for (i = 0; i < arr.length; i++) {
            ar[arr[i]]++;
        }
        for (i = 1; i < 6; i++) {
            if (ar[i] >= max) {
                max = ar[i];
            }
        }
        for (i = 1; i < 6; i++) {
            if (ar[i] == max) {
                return i;
            }
        }
    }