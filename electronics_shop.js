function getMoneySpent(keyboards, drives, b) {
    var x=0;
    for (var i = 0; i < keyboards.length; i++){
        for (var j = 0; j < drives.length; j++){
            var sum = keyboards[i] + drives[j];
            if (sum <= b) {
                if (sum >= x) {
                    x = sum;
                }
            }
        }
    }
    if (x > 0) {
        return x;
    } else {
        return -1;
    }
}