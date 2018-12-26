function chocolateFeast(n, c, m) {
    var count = 0;
    var cost = 0;
    while (1) {
        cost += c;
        if (cost > n) {
            break;
        }
        count++;
        if ((count % m) == 0) {
            count++;
        }
    }
    return count;
}