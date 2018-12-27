// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    var status = "YES";
    var tempArr = new Array(96).fill(0);
    for (let i = 0; i < b.length; i++){
        tempArr[b.charCodeAt(i)]++;
    }
    for (let i = 1; i < b.length - 1; i++){
        if (b[i] != b[i + 1] && b[i] != b[i - 1] && tempArr[95] < 1) {
            status = "NO";
        }
    }
    for (let i = 65; i <= 90; i++){
        if (b.indexOf(String.fromCodePoint(i)) != -1 && tempArr[i] < 2) {
            status = "NO";
        }
    }
    return status;
}