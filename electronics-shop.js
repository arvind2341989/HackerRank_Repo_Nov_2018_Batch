function getMoneySpent(keyboards, drives, b) {
    var buy = -1, i = 0, j = 0;
    for (i = 0; i < keyboards.length; i++) {
        for (j = 0; j < drives.length; j++) {
            var check = keyboards[i] + drives[j]
            if (check > buy && check <= b) {
                buy = check;
            }
        }
    }
    return buy;
}