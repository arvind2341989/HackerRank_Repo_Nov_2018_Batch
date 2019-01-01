// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    var strLen = s.length;
    var delCount = 0;

    for (let i = 1; i < strLen; i++)
        if (s.charAt(i) == s.charAt(i - 1)) delCount++;

    return delCount;
}