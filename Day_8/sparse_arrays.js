function matchingStrings(strings, queries) {
    var arr = [];
    for (var j = 0; j < queries.length; j++) {
        var count = 0;
        for (var i = 0; i < strings.length; i++){
            if (strings[i] == queries[j]) {
                count++;
            }
            
        }
        arr.push(count);
    }
    return arr;
}