// Complete the repeatedString function below.
function repeatedString(s, n) {
    var count = 0;
    var strLen = s.length;
    if (strLen === 1 && s.charAt(0)==="a") return n;

    var repeatCounter = parseInt(n / strLen);
    var remStr = n - strLen * repeatCounter;
    //var repStr = s.repeat(repeatCounter);
    //repStr = repStr + s.substr(0, remStr);

    for (let i = 0; i < s.length; i++){
        if (s.charAt(i) == "a") count++;
    }
    count = count * repeatCounter;

    for (let i = 0; i < s.substr(0,remStr).length; i++) {
        if (s.charAt(i) == "a") count++;
    }
    return count;
}