function weightedUniformStrings(s, queries) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var str = s.split('');
    var array = [];
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
        array.push(sum * weight)
    }
    return queries.map(q => array.indexOf(q) > -1 ? 'Yes' : 'No')
}