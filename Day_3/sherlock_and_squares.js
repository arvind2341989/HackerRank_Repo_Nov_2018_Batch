function squares(a, b) {
    var c = Math.sqrt(a);
    var d = parseInt(Math.sqrt(a));
    var sum = parseInt(Math.sqrt(b)) - parseInt(Math.sqrt(a));
    if (c == d) {
        sum = sum + 1;
    }
    return sum;
}