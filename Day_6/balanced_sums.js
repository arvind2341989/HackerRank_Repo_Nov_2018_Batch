function balancedSums(arr) {
    var str = "";
    var n = arr.length;
    for (let i = 0; i < n; i++){
        str += arr[i] + " ";
    }
    var a = str.split(' ').map(function (a) {
        return Number(a);
    });
    var sumleft = [], sumright = [];
    for (var j = 0; j < n; j++) {
        sumleft.push(j > 0 ? sumleft[j - 1] + a[j] : a[j]);
        sumright.push(j > 0 ? sumright[j - 1] + a[n - j - 1] : a[n - j - 1]);
    }
    for (var j = 0; j < n; j++) {
        if (sumleft[j] == sumright[n - j - 1]) {
            return "YES"
            break;
        }
    }
    if (j == n) return "NO";
}