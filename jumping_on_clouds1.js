function jumpingOnClouds(a) {
    var count = 0;
    var length = a.length;
    if (length == 2) {
        return 1;
    }
    var i = 0;
    while (i < length - 2) {
        if (a[i + 2] == 0) {
            count++;
            i = i + 2;
        }
        else {
            count++;
            i++;
        }
    }
    if (a[i] == 0 && i == length - 2) {
        count++;
    }
    return count;
}