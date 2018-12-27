function sockMerchant(n, ar) {
    var count = 0;
    var arr = ar.sort();
    for (var i = 0; i < ar.length;)
    {
        if (arr[i] == arr[i + 1])
        {
            count++;
            i = i + 2;
        }
        else
        {
            i = i + 1;
        }
    }
    return count;
}