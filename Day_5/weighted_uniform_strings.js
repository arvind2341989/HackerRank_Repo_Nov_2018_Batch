// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    var charTxt = s.match(/([a-z])\1*/g);
    var matchArr = [];
    var newArr = new Set();
    for (let i = 0; i < charTxt.length; i++){
        let weight = charTxt[i][0].charCodeAt(0) - 96;
        let charLen = charTxt[i].length;

        for (let j = 0; j < charLen + 1; j++){
            newArr.add(weight * j);
        }
    } 

    for (let i = 0; i < queries.length; i++){
        if (newArr.has(queries[i])) matchArr.push("Yes");
        else matchArr.push("No");
    }

    return matchArr;

}