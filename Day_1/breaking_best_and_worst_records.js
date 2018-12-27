function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let countMax = 0;
    let countMin = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            countMax++;
        }
        if (scores[i] < min) {
            min = scores[i];
            countMin++;
        }
    }

    return [countMax, countMin];

}
