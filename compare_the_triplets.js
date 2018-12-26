function compareTriplets(a, b) {
    var i = 0, alice = 0, bob = 0;
    for (i = 0; i < a.length; i++)
    {
        if (a[i] > b[i])
        {   
            alice++;
        }
        else if (a[i] < b[i])
        {
            bob++;
        }

    }
    var arr = [alice, bob];
    return arr;
}