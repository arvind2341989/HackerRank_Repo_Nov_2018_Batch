function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var apple_count = 0, orange_count = 0;
    for (let i = 0; i < apples.length; i++) { 
        if (apples[i] > 0) { 
            if (a + apples[i] <= t && a + apples[i] >= s) { 
                apple_count++;
            }

        }
    }
    for (let i = 0; i < oranges.length; i++) {
        if (oranges[i] < 0) {
            if (oranges[i] < 0) { 
                if (b + oranges[i] <= t && b + oranges[i] >= s) { 
                    orange_count++;
                }
            }

        }
    }
    console.log(apple_count);
    console.log(orange_count);
}