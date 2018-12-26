function getTotalX(a, b) {
    var count = 0;
    var foundNums = 0;
    var num1 = [];
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i % a[j] != 0) {
                count++;
                break;
            }
            else continue;
        }
        if (count == 0) {
            num1[foundNums] = i;
            ++foundNums;
        }
        count = 0;
    }
    foundNums = 0;
    for (let i = 0; i < num1.length; i++) {
        count = 0;
        for (let j = 0; j < b.length; j++) {
            if ((b[j] % num1[i]) != 0) {
                count++;
                break;
            } else {
            }
        }
        if (count == 0)++foundNums;
    }
    return foundNums;
}