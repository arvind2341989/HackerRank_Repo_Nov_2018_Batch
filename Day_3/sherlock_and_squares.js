function squares(a, b) {
    var count = 0, start = 0;
    var realsqrt = Math.sqrt(a);
    var sqrt = parseInt(realsqrt);
    if (sqrt == realsqrt) {
        //perfect square
        start = parseInt(realsqrt);
    }
    else {
        start = parseInt(realsqrt) + 1;
    }
    while (start * start <= b) {
        start++;
        count++;
    }
    return count;
}