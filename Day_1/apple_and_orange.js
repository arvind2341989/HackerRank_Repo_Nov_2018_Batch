function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var count_apples = 0, count_oranges = 0;
    for (var i = 0; i < apples.length; i++) { 
        if (apples[i] + a >= s && apples[i] + a <= t) { 
            count_apples++;
        }
    }
    for (i = 0; i < oranges.length; i++) { 
        if (oranges[i] + b >= s && oranges[i] + b <= t) { 
            count_oranges++;
        }
    }
    console.log(count_apples + "\n" + count_oranges);
}