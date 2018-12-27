function plusMinus(arr) {
    var i = 0, positive = 0, negative = 0, zero = 0;
    for (i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0)
        {
            positive++;
        }
        else if (arr[i] < 0)
        {
            negative++;
        }
        else
        {
            zero++;
        }
    }
    positive = positive / arr.length;
    negative = negative / arr.length;
    zero = zero / arr.length;
    console.log(positive);
    console.log(negative);
    console.log(zero);
}