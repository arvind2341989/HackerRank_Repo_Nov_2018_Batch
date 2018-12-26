function getMoneySpent(keyboards, drives, b) {
    var max = -1;
    for (var i = 0; i < keyboards.length; i++) { 
        for (var j = 0; j < drives.length; j++) { 
            if ((keyboards[i] + drives[j]) <= b) { 
                if (max < (keyboards[i] + drives[j])) { 
                    max = keyboards[i] + drives[j];
                }
            }
        }
    }
    return max; 
}