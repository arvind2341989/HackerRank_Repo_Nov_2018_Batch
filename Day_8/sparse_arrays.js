// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    var resultArr = [queries.length];
    for (let i = 0; i < queries.length; i++){
        resultArr[i] = 0;
        for (let j = 0; j < strings.length; j++){
            if (queries[i] === strings[j]) resultArr[i] += 1;
        }
    }
    return resultArr;
}