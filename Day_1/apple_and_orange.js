function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var i, count_apples = 0, count_oranges = 0;
    for (i = 0; i < apples.length; i++) {
        if (((a + apples[i]) >= s) && ((a + apples[i]) <= t)) {
            count_apples++;
        }
    }
    for (i = 0; i < oranges.length; i++) {
        if (((b + oranges[i]) >= s) && ((b + oranges[i]) <= t)) {
            count_oranges++;
        }
    }

    console.log(count_apples);
    console.log(count_oranges);
}