function nonDivisibleSubset(k, S) {
    var countArray = new Array(k).fill(0);

    //let's say k = 3
    //if we have an element with remainder 1,
    //we need to find an element with remainder 2
    //and then choose the largest count between the 2

    

    for (var i = 0; i < S.length; i++){
        countArray[S[i] % k] += 1;
    }

    //there might be a case where the two numbers are exactly divisible by k
    //i.e, S[i] % k == 0 for both elements
    //then take count = 1

    var count = countArray[0] < 1 ? countArray[0] : 1;

    for (var i = 1; i < parseInt(k / 2) + 1; i++) {
        //because if k = 4 and i = 2, to eliminate counting 2, two times
        if (i != k - i) {
            count += countArray[i] > countArray[k - i] ? countArray[i] : countArray[k - i];
        }
    }
    if (k % 2 == 0) {
        count += 1;
    }
    return count;
}