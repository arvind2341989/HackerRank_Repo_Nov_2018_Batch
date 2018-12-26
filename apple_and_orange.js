function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var i = 0;
    var applesFallen = 0, orangesFallen = 0;
    for (i = 0; i < apples.length; i++){
        var temp = a + apples[i];
        if (temp >= s && temp <= t) {
            applesFallen++;
        }
    }
    process.stdout.write(applesFallen + "\n");
    for (i = 0; i < oranges.length; i++) {
        var temp = b + oranges[i];
        if (temp >= s && temp <= t) {
            orangesFallen++;
        }
    }
    process.stdout.write(orangesFallen + "\n");
}