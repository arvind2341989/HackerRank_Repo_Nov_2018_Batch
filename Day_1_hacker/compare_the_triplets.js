function compareTriplets(a, b) {
    var i;
    var aPoint = 0;
    var bPoint = 0;
    for (i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            aPoint++;
        }
        else if (a[i] < b[i]) {
            bPoint++;
        }
        else {
            continue;
        }
        
    }
    return [aPoint, bPoint];
}