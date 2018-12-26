function compareTriplets(a, b) {
    var arr = [0,0];
    for (var i = 0; i < 3; i++) { 
        if (a[i] < b[i]) {
            arr[1]++;
        }
        else if (a[i] > b[i]) { 
            arr[0]++;
        }
    }
    return arr;
}