function compareTriplets(a, b) {
    var finalPoints = [0, 0];
    for (var i = 0; i < a.length; i++) { 
        if (a[i] < b[i]) {
            finalPoints[1]++;
        }
        else if (a[i] > b[i]) {
            finalPoints[0]++;
        }
        else { 
            finalPoints[0] += 0;
            finalPoints[1] += 0;
        }
    }
    return finalPoints;
}