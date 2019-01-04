/*
 * Complete the twoStacks function below.
 */
function twoStacks(x, a, b) {
    var aPos = -1;
    var bPos = -1;
    var sum = 0;
    while (sum + b[bPos + 1] <= x)
        sum += b[++bPos];
    var best = aPos + bPos;
    while (bPos > -2) {
        if (sum + a[aPos + 1] <= x) {
            sum += a[++aPos];
            best = Math.max(best, aPos + bPos);
        } else
            sum -= b[bPos--];
    }
    return Math.max(best, aPos + bPos) + 2;
}