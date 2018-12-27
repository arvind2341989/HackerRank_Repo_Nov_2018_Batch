function getMoneySpent(keyboards, drives, b) {
    keyboards.sort(function (a, b) { return (b - a); });
    drives.sort(function (a, b) { return (b - a); });

    if (keyboards[keyboards.length - 1] + drives[drives.length - 1] > b) {
        return -1;
    }
    else { 
        var max = 0,temp = 0;
        for (let i = 0; i < keyboards.length; i++) { 
            for (let j = 0; j < drives.length  ; j++) {
                if (keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b)
                    max = keyboards[i] + drives[j];
            }
        }
        return max;
    }
}