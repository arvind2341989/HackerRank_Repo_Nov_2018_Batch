function howManyGames(p, d, m, s) {
    // p , p -d , p - 2d.....  until <= m -> after m dollars
    var count = 0;
    while (s >= p) {
        count++;
        s -= p;
        p = Math.max(p - d, m);
    }
    return count;
}