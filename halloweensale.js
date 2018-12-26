function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    var count = 0;
    while (s >= p) {
        count++;
        s -= p;
        p = Math.max(p - d, m);
    }
    return count;
}
