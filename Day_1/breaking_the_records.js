function breakingRecords(scores) {
    var countHigh = 0;
    var countLow = 0;
    var max = scores[0];
    var min = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            countHigh++;
        }
        else if (scores[i] < min) {
            min = scores[i];
            countLow++;
        }
        else {
	}
    }
    return [countHigh, countLow];
}