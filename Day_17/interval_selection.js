
function compare(interval1, interval2) {
    if (interval1[0] < interval2[0]) {
        return -1;
    } else if (interval1[0] === interval2[0]) {
        if (interval1[1] < interval2[1]) {
            return -1;
        } else if (interval1[1] === interval2[1]) {
            return 0;
        } else {
            return 1;
        }
    } else {
        return 1;
    }
}

function isIntersected(interval1, interval2) {
    [interval1, interval2] = [interval1, interval2].sort(compare);
    if (interval1[1] >= interval2[0]) {
        return true;
    } else {
        return false;
    }
}

/*
 * Complete the intervalSelection function below.
 */
function intervalSelection(intervals) {
    /*
     * Write your code here.
     */
    if (intervals.length <= 1) {
        return intervals.length;
    }
    intervals = intervals.sort(compare);
    let record = [intervals[0]];
    let count = 1;
    for (let i = 1; i < intervals.length; ++i) {
        const interval = intervals[i];
        if (record.length === 1) {
            if (!isIntersected(record[0], interval)) {
                count++;
                // record[0] won't intersect with the rest
                // update record[0]
                record[0] = interval;
            } else {
                count++;
                record[1] = interval;
            }
        } else if (record.length === 2) {
            if (!isIntersected(record[0], interval) && !isIntersected(record[1], interval)) {
                count++;
                record = [interval];
            } else if (!isIntersected(record[0], interval)) {
                count++;
                record[0] = interval;
            } else if (!isIntersected(record[1], interval)) {
                count++;
                record[1] = interval;
            } else { // triple intersects
                if (record[0][1] > interval[1] && record[0][1] > record[1][1]) {
                    record[0] = interval;
                } else if (record[1][1] > interval[1] && record[1][1] >= record[0][1]) {
                    record[1] = interval;
                }
            }
        }
    }
    return count;
}