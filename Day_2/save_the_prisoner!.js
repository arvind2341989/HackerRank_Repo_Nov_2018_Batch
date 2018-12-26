// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    if (n == 0 || m == 0 || s == 0) return 0;
    if (n == 1 && m == 1 && s == 1) return 1;

    var finalNum = parseInt((s + (m - 1)) % n);

    if (finalNum == 0) return n;
    else return finalNum;

}