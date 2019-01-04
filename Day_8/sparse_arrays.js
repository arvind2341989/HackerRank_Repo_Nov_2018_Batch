function matchingStrings(strings, queries) {
    var len = queries.length;
    var result = new Array(len);
    var i = 0;
    while (i < len) {
        result[i] = matchedCount(strings, queries[i]);
        i++;
    }
    return result;

}

function matchedCount(strings, query){
    var i = 0, len = strings.length;
    var count = 0;
    while (i < len) {
        var s = strings[i];

        if (s == query) {
            count++;
        }
        i++;
    }
    return count;
}