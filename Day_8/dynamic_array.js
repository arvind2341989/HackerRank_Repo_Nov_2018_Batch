// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    var newArr = new Array(n).fill(0).map(() => new Array().fill(0));
    var resultArr = [];
    var lastAnswer = 0;
    var temp;

    for (let i = 0; i < queries.length; i++){
        let query1 = queries[i][0];
        let query2 = queries[i][1];
        let query3 = queries[i][2];

        let sequence = query2 ^ lastAnswer;
        sequence = sequence % n;

        if (query1 === 1) {
            newArr[sequence].push(query3);
        }else {
            temp = newArr[sequence];
            lastAnswer = temp[query3 % temp.length];
            resultArr.push(lastAnswer);
        }
    }
    return resultArr;
}