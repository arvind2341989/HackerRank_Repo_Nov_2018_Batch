function dynamicArray(n, queries) {
    var a = [n];
    var temp;
    for (var i = 0; i < n; i++) {
        a[i] = [];
    }
    var res = [];
    var lastAnswer = 0;
    for (var i = 0; i < queries.length; i++) {
        var qt1 = queries[i][0];
        var qt2 = queries[i][1];
        var qt3 = queries[i][2];
        if (qt1 == 1) {
            var seq = qt2 ^ lastAnswer;
            seq = seq % n;
            a[seq].push(qt3);
        }
        else {
            var seq = qt2 ^ lastAnswer;
            seq = seq % n;
            temp = a[seq];
            lastAnswer = temp[qt3 % temp.length];
            res.push(lastAnswer);
        }
    }
    return res;
}