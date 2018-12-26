function compareTriplets(a, b) {
    var aCount = 0, bCount = 0;
    //since both a and b are triplets, directly compare
    if (a[0] > b[0]) {
        aCount++;
    }
    if (b[0] > a[0]) {
        bCount++;
    }
    if (a[1] > b[1]) {
        aCount++;
    }
    if (b[1] > a[1]) {
        bCount++;
    }
    if (a[2] > b[2]) {
        aCount++;
    }
    if (b[2] > a[2]) {
        bCount++;
    }
    return [aCount, bCount];
}