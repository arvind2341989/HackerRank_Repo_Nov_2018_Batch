function compareTriplets(a, b) {

    var a1 = 0;
    var b1 = 0; 
    var arr = new Array(2);
    for (var i = 0; i < 3; i++){
        if (a[i] < b[i]) {
            b1++;
        }
        else if(a[i] > b[i])
            a1++;
    }
    arr[0] = a1;
    arr[1] = b1;
    return arr;

}