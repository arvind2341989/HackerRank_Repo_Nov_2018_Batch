function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var Apples = 0;
    var Oranges = 0;
    for (var i = 0; i < apples.length; i++) {
        apples[i] += a;
        if (apples[i] >= s && apples[i] <= t) {
            Apples++;
        }
    }
    for (var i = 0; i < oranges.length; i++) {
        oranges[i] += b;
        if (oranges[i] <= t && oranges[i] >= s) {
            Oranges++;
        }
    }
    console.log(Apples);
    console.log(Oranges);

}
