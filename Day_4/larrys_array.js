function larrysArray(A) {
    var rotate = 0;
    for (var i = 0; i < A.length; i++)
        for (var j = i + 1; j < A.length; j++)
            if (A[i] > A[j])
                rotate++;
    if (rotate % 2 == 0) {
        return "YES";
    }
    else {
        return "NO";
    }
}