function getMoneySpent(keyboards, drives, b) {
    keyboards.sort();
    drives.sort();
    var keyboardLen = keyboards.length;
    var drivesLen = drives.length;
    var max = -1;
    //brute force as keyboard.length, drives.length <= 100
    for (var i = 0; i < keyboardLen; i++){
        for (var j = 0; j < drivesLen; j++){
            var sum = keyboards[i] + drives[j];
            if (sum <= b) {
                max = Math.max(max, sum);
            }
        }
    }
    return max;
}