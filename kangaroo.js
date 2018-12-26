function kangaroo(x1, v1, x2, v2) {
    var flag;
    var sum1 = x1 + v1;
    var sum2 = x2 + v2;
    for (var i = 0; i < 10000;i++)
    if (sum1 == sum2)
    {
        flag = "YES";
        break;
    }
    else {
        flag="NO"
        sum1 = sum1 + v1;
        sum2 = sum2 + v2;
    }
    return flag;
}