function breakingRecords(scores) {
    var max = scores[0];
    var min = scores[0];
    var maxCount = 0, minCount = 0;
    for (var i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        } 
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        } 
    }
    return [maxCount, minCount];
}