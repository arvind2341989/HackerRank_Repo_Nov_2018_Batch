function beautifulTriplets(d, arr) {
    var count1 = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        count = 0;
        var element = arr[i];
        for (var j = i + 1; j < arr.length; j++){
            if ((element + d)== arr[j]  && count < 2) {
                count++;
                element = arr[j];
            }
        }
        if (count == 2) {
            count1++;
        }
    }
    return count1;
}