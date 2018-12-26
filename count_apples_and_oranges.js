function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var j = [],k=[],count=0,sum=0;
    for (var i = 0; i < apples.length; i++) {
        j[i] = a + apples[i];

        if (j[i] >= s && j[i] <= t) {
            count++;
        }

    }
    
    console.log(count);


    
    for (var i = 0; i < oranges.length; i++) {
        k[i] = b + oranges[i];

        if (k[i] >= s && k[i] <= t) {
            sum++;
        }

    }
   
    console.log(sum);
    

}