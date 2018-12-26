// Complete the permutationEquation function below.
function permutationEquation(p) {
    var seqArr = [];
    for (let i = 0; i < p.length; i++){
        seqArr[i] = p.indexOf(p.indexOf(i + 1) + 1) + 1;
    }
    return seqArr;
}