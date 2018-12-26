function breakingRecords(scores) {
        var i, min = scores[0], max = scores[0], max_count = 0, min_count = 0;
        for (i = 1; i < scores.length; i++) {
            if (scores[i] > max) {
                max = scores[i];
                max_count++;
            }
            else if (scores[i] < min) {
                min = scores[i];
                min_count++;
            }
        }
        return [max_count, min_count];
    }