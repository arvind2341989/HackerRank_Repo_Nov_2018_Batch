function beautifulTriplets(d, arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        var first = arr[i];
        var second = first + d;
        var third = second + d;
        if (arr.indexOf(second) != -1 && arr.indexOf(third) != -1) {
            count++;
        }
    }
    return count;
}