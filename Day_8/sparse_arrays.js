function matchingStrings(strings, queries) {
    var result = new Array(queries.length).fill(0);
    for (var v = 0; v < queries.length; v++) {
        for (var z = 0; z < strings.length; z++) {
            if (queries[v] == strings[z]) {
                result[v]++;
            }
        }
    }
    return result;

}