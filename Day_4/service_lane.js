// Complete the serviceLane function below.
function serviceLane(width,n, cases) {
    var minArr = [];
    var min = 0;
    for (let i = 0; i < cases.length; i++){
       let min = width[cases[i][0]];
        for (let j = cases[i][0]; j <= cases[i][1]; j++){
            if (width[j] < min) min = width[j];
        }
        minArr[i] = min;
    }
    return minArr;
}