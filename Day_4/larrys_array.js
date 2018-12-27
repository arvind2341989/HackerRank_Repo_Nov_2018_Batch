// Complete the larrysArray function below.
function larrysArray(A) {
    //var result = 'YES';
    var newArr = A.slice(0);
    var secArray = [];
    newArr.sort(function (a, b) { return a - b });
    while (A.toString() != newArr.toString() && secArray.toString() != A.toString()) {
        secArray = A.slice(0);
        for (var i = 0; i < A.length - 2; i++) {
            var tmpArray = A.slice(i, i + 3);
            if (tmpArray[0] <= tmpArray[1] && tmpArray[0] <= tmpArray[2]) {
                A[i] = tmpArray[0];
                A[i + 1] = tmpArray[1];
                A[i + 2] = tmpArray[2];
            } else if (tmpArray[1] <= tmpArray[0] && tmpArray[1] <= tmpArray[2]) {
                A[i] = tmpArray[1];
                A[i + 1] = tmpArray[2];
                A[i + 2] = tmpArray[0];
            } else {
                A[i] = tmpArray[2];
                A[i + 1] = tmpArray[0];
                A[i + 2] = tmpArray[1];
            }
        }
    }
    return A.toString() == newArr.toString() ? 'YES' : 'NO';    
}