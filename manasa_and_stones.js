function stones(n, a, b) {
    var result = [];
    var sum = 0;
    var first = (n - 1) * Math.min(a, b);

    result.push(first);
    while ((sum + first) < ((n - 1) * Math.max(a, b))) {
        sum += Math.abs(b - a);

        result.push(first + sum);
    }
    return result;
}