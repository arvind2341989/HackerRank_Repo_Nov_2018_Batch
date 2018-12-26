function countingValleys(n, s) {
    var upCount = 0;
    var downCount = 0;
    var vallyCount = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] == 'U') upCount++;
        if (s[i] == 'D') downCount++;
        if ((upCount == downCount) && (s[i] == 'U')) vallyCount++;
    }
    return vallyCount;

}