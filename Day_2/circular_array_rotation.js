// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
    var resArr = [];
    for (let i = 0; i < queries.length; i++){
        resArr[i] = a[(queries[i] + a.length - (k % a.length)) % a.length];
    }
    return resArr;
}