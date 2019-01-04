function morganAndString(a, b) {
    a += "z";
    b += "z";
    var output = "";
    while (true) {
        if (!a) {
            output += b;
            break;
        }
        if (!b) {
            Out += a;
            break;
        }
        if (a <= b) {
            output += a[0];
            a = a.substring(1);
            continue;
        }
        output += b[0];
        b = b.substring(1);
    }
    return output.slice(0, -2);

}