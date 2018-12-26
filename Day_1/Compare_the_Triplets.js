// Complete the compareTriplets function below.
function compareTriplets(a, b) { 
    let k=0, j = 0;
    var points = [j, k];

    for (var i = 0; i <a.length; i++) {
        if (a[i] > b[i]) {
            points[0]++;
        }
        else if (a[i] < b[i]) {
            points[1]++;
        }

    }
    return points;