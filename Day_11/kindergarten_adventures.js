/*
 * Complete the solve function below.
 */
function solve(t) {
    var n = t.length;
    var arrivals = [];
    var departures = [];
    t.forEach((val, idx) => {
        if (val > n) return;
        if (val == 0) {
            arrivals.push(0);
            return;
        }
        let [rangeStart, rangeEnd] = findRange(val, idx, n);
        if (rangeStart > rangeEnd) arrivals.push(0);
        arrivals.push(rangeStart);
        departures.push(rangeEnd);
    });
    var diffs = new Array(n).fill(0);
    arrivals.forEach(val => {
        diffs[val] += 1;
    });
    departures.forEach(val => {
        diffs[val] -= 1;
    })

    var totals = [];
    var curr = 0;
    var mx = 0;
    var mxIdx;

    diffs.forEach((diff, idx) => {
        curr += diff;
        if (curr > mx) {
            mx = curr;
            mxIdx = idx;
        }
    })
    return mxIdx + 1; 
}
function findRange(val, idx, n) {
    var last = (1 + idx + n - val) % n;
    var start = (idx + 1) % n;
    return [start, last];
}