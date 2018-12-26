function compareTriplets(a, b) {
    var i = 0, Alice = 0, Bob = 0;
    for (i = 0; i < a.length; i++){
        if (a[i] > b[i]) {
            Alice++; 
        }
        else if (a[i] < b[i]) {
            Bob++;
        }
    }
    var arr = [Alice, Bob];
    return arr;
}