 function countApplesAndOranges(s, t, a, b, apples, oranges) {
        var samApples = 0;
        var samOranges = 0;
        for (var i = 0; i < apples.length; i++) {
            apples[i] += a;
            if (apples[i] >= s && apples[i] <= t) {
                samApples++;
            }
        }
        for (var i = 0; i < oranges.length; i++) {
            oranges[i] += b;
            if (oranges[i] <= t && oranges[i] >= s) {
                samOranges++;
            }
        }
        console.log(samApples);
        console.log(samOranges);



    }