// Complete the minimumDistances function below.
function minimumDistances(a) {
    var indexDiff = [];
    var counter = 0;
    for (let i = 0; i < a.length - 1; i++){
        for (let j = i+1; j < a.length; j++){
            if (a[i] == a[j]) {
                indexDiff[counter] = Math.abs(j - i);
                counter++;
            }
        }
    }
    if (counter == 0) return -1;
    else {
        indexDiff.sort(function (a, b) { return a - b; });
        return indexDiff[0]; 
    }
}