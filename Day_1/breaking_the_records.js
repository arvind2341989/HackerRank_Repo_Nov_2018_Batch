function breakingRecords(scores) {
    var min, max, count=[0,0];
    min = max = scores[0];
    for (var i = 1; i < scores.length; i++) { 
        if (min > scores[i]) { 
            min = scores[i];
            count[1]++;
        }
        if (max < scores[i]) { 
            max = scores[i];
            count[0]++;
        }
    }
    return count;
}