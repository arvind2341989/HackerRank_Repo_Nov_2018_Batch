function weightedUniformStrings(s, queries) {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
    var str = s.split('');
    var arr = [];
    var char;
    var sum = 0;
    for (let i = 0; i < str.length; i++) {
        var weight = alpha.indexOf(str[i]) + 1
        if (str[i] === char) {
            sum++
        } else {
            char = str[i];
            sum = 1
        }
        arr.push(sum * weight)
    }
    return queries.map(q => arr.indexOf(q) > -1 ? 'Yes' : 'No')

}