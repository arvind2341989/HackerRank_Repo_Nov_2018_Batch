function commonChild(s1, s2) {
    let strLen = s1.length;
    let prevArray = new Array(strLen + 1);
    let currentArray = new Array(strLen + 1);

    prevArray.fill(0);
    currentArray.fill(0);

    for (let i = 1; i <= strLen; i++) {
        for (let j = 1; j <= strLen; j++) {
            if (s1[i - 1] == s2[j - 1]) {
                currentArray[j] = prevArray[j - 1] + 1;
            }
            else {
                currentArray[j] = Math.max(currentArray[j - 1], prevArray[j]);
            }
        }
        prevArray = currentArray.slice(0);
    }
    return currentArray[strLen];
}