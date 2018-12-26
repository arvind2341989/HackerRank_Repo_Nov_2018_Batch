function getMoneySpent(keyboards, drives, b) {
    var max = -1;
    var currentMax = -2;
    keyboards.sort(function (a, b) { return a - b; });
    drives.sort(function (a, b) { return a - b; });
    if (keyboards[keyboards.length - 1] + drives[drives.length - 1] <= b) {
        max = keyboards[keyboards.length - 1] + drives[drives.length - 1];
        return max;
    }
    else if (keyboards[0] + drives[0] > b)
        return max;
    else {
        for (let i = 0; i < keyboards.length; i++) {
            for (let j = 0; j < drives.length; j++) {

                if (keyboards[i] + drives[j] > b) break;
                else currentMax = keyboards[i] + drives[j];
                if ((currentMax > max) && (currentMax <= b)) max = currentMax;
                currentMax = -2;
            }
        }
    }
    return max;
}