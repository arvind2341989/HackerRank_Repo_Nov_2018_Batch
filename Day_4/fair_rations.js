// Complete the fairRations function below.
function fairRations(B) {
    var loaf = 0;
    if (B.length == 2 && (B[0] + B[1]) % 2 == 1) return "NO";
    else {
        for (let i = 0; i < B.length-1; i++) {
            if (B[i] % 2 != 0) {
                B[i] = B[i] + 1;
                B[i + 1] = B[i + 1] + 1;
                loaf += 2;
            }
        }
    }
    if (B.some(function (checkOdd) { return checkOdd % 2 == 1; })) return "NO";
    else return loaf;
}