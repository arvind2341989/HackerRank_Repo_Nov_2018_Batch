// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
    var choco = parseInt(n / c);
    var totalchoco = choco;

    while (choco >= m) {
        choco -= m;
        totalchoco++;
        choco++;
    }
    return totalchoco;

}