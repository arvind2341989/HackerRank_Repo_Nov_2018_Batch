function plusMinus(arr) {
    var positive=0, negative=0, zero=0;
    for (var i = 0; i < arr.length;i++)
    {
        if (arr[i] > 0)
        {
            positive++;
        }
        else if (arr[i] < 0)
        {
            negative++;
        }
        else {
            zero++;
        }
    
    }
    var positive1 = positive / arr.length;
    var negative1 = negative/ arr.length;
    var zero1 = zero / arr.length;
   var result=[positive1, negative1, zero1];
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);

}
