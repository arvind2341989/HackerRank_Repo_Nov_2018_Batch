function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appleCount = 0;
    var orangeCount = 0;
    for (let i = 0; i < apples.length; i++){
        let apple = apples[i] + a;
        if (apple >= s && apple <= t ) appleCount++;
        else continue;
    }

    for (let i = 0; i < oranges.length; i++){
        let orange = oranges[i] + b;
        if (orange <= t && orange >=s) orangeCount++;
        else continue;
    }
    console.log(appleCount);
    console.log(orangeCount);

}