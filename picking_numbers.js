function pickingNumbers(a) {
    var map = new Map();
    for (var i = 0; i < a.length; i++) {
        if (map.get(a[i]) === undefined) {
            map.set(a[i], 1);
        }
        else {
            map.set(a[i], map.get(a[i]) + 1);
        }
    }
    var count = 0;
    var max = 0;
    var entries = map.entries();
    for (var entry of entries) {
        if (map.size == 1) {
            return entry[1];
        }
        if (map.has(entry[0] + 1)) {
            count = entry[1] + map.get(entry[0] + 1);
        }
        else {
            count = entry[1];
        }
        if (count > max) {
            max = count;
        }
    }
    return max;
}