// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    var index = 0;
    var subStr = "hackerrank";
    for (let i = 0; i < s.length; i++){
        if (s[i] == subStr[index]) index++;
    }
    if (index === subStr.length) return "YES";
    else return "NO";
}