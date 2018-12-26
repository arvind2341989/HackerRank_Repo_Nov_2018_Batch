function compareTriplets(a, b) {
    var alice=0, bob=0;
    
    for (var i = 0; i < 3; i++)
    {
        if (a[i] < b[i])
        {
            bob++;
        }
        else if(a[i]>b[i]) {
            alice++;
        }
    }
    var result = [alice, bob];
    return result;
}