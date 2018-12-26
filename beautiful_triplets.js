function beautifulTriplets(d, arr) {
    var count = 0;
    for (var i = 0; i < arr.length - 2; i++) { 
        for (var j = i + 1; j < arr.length - 1; j++) { 
            if ((arr[j] - arr[i]) == d) {
                for (var k = j + 1; k < arr.length; k++) {
                    if ((arr[k] - arr[j]) == d) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
}