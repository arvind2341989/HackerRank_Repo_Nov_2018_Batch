function migratoryBirds(arr) {
    var ar = [0, 0, 0, 0, 0];
    for (var i = 0; i < 5; i++) { 
        for (var j = 0; j < arr.length; j++) { 
            if (arr[j] == i+1) { 
                ar[i]++;
            }
        }
    }
    var max, j = 0;
    max = ar[0];
    for (var i = 1; i < 5; i++) { 
        if (max < ar[i]) { 
            max = ar[i];
            j = i;
        }
    }
    return j+1;
}