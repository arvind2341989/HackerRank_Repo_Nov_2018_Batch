function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    var count = 1;
     do{
        s = s - p;
        p = p - d;
        count++;
    }while (p >=m && s >= p);
    return count;
}