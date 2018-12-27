function migratoryBirds(arr) {
    var c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            c1++;
        } else if (arr[i] == 2) {
            c2++;
        } else if (arr[i] == 3) {
            c3++;
        } else if (arr[i] == 4) {
            c4++;
        } else {
            c5++;
        }
    }

    var common = 1, max = c1;
    if (c2 > max) {
        common = 2;
        max = c2;
    } 
    if (c3 > max) {
        common = 3;
        max = c3;
    }
    if (c4 > max) {
        common = 4;
        max = c4;
    }
    if (c5 > max) {
        common = 5;  
    } 
    return common;            
}