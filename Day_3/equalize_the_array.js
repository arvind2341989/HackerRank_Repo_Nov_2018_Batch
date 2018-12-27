function equalizeArray(a) {
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
    var i = 0;
    var maxIndex = 0;
    var entries = map.entries();
    for (var entry of entries) {
        count = entry[1];
        if (count > max) {
            max = count;
            maxIndex = i;
        }
        i++;
    }
    i = 0;
    var result = 0;
    var entries = map.entries();
    for (var entry of entries) {
        if (i != maxIndex)  {
            result += entry[1];
        }
        i++;
    }
    return result;
}