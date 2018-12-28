// Complete the morganAndString function below.
function morganAndString(a, b) {
    a += "z";
    b += "z";
    var newArr = "";
    while (true) {
        if (!a) {
            newArr += b;
            break;
        }
        if (!b) {
            newArr += a;
            break;
        }
        if (a <= b) {
            newArr += a[0];
            a = a.substring(1);
            continue;
        }
        newArr += b[0];
        b = b.substring(1);
    }
    return newArr.slice(0, -2);
}