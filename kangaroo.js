function kangaroo(x1, v1, x2, v2) {
    var sum1 = 0, sum2 = 0;
    for (var i = 0; i < 10000; i++) {
        sum1 = x1 + v1;
        x1 = sum1;
        sum2 = x2 + v2;
        x2 = sum2;
        if (sum1 == sum2) {
            var status = 1;
            break;
        }
    }
    if (status == 1) {
        var ans = "YES";
        return ans;
    }
    else
        ans = "NO";
    return ans;

} 