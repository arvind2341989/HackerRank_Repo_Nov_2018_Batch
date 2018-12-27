function birthdayCakeCandles(ar) {
    var sum = 0, tall = 0;
    for (var j = 0; j < ar.length; j++)
    {
        if (ar[j] > tall)
        {
            tall = ar[j];}
    }
    
    for (var i = 0; i < ar.length; i++)
    {
        if (ar[i] == tall)
        {
            sum++;
        }
    }
    return sum;
}