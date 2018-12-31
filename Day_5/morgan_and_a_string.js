function morganAndString(a, b) {

    a += "z";
    b += "z";
    var Out = "";
    while (true) {
        if (!a) {
            Out += b;
            break;
        }
        if (!b) {
            Out += a;
            break;
        }
        if (a <= b) {
            Out += a[0];
            a = a.substring(1);
            continue;
        }
        Out += b[0];
        b = b.substring(1);
    }
    return Out.slice(0, -2);

}