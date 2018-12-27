// Complete the howManyGames function below.
function howManyGames(p, d, m, s) {
    var count = 0;
    var totalCost = 0;
    totalCost = totalCost + p;
    while (totalCost <= s) {
        p = p - d;
        if (p <= m) {
            totalCost = totalCost + m;
        }
        else {
            totalCost = totalCost + p;
        }
        count++;
    }
    return count;
}