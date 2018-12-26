function birthdayCakeCandles(ar) {
    var sum = 0; var max = 0;
    for (var j = 0; j < ar.length; j++)
    {
        if (max < ar[j])
        {
            max = ar[j];
        }
    }
    for (var i = 0; i < ar.length; i++)
    {
        if (max == ar[i])
        {
            sum++;
        }
    }

    return sum;
}
