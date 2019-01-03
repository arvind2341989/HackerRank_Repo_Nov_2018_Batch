function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var c = 0; var c1 = 0;
    for (var i = 0; i < apples.length; i++){
        apples[i] = apples[i] + a;
        if (apples[i] >= s && apples[i] <= t)
            c++;
    }
    for (var i = 0; i < oranges.length; i++) {
        oranges[i] = oranges[i] + b;
        if (oranges[i] >= s && oranges[i] <= t)
            c1++;
    }
    console.log(c);
    console.log(c1);
}