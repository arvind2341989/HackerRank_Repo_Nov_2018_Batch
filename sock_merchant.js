function sockMerchant(n, ar) {
  
    var array=ar.sort();
    var count=0;
    for (var i = 0; i < n;)
    {
        if (array[i]== array[i + 1])
        {
            count++;
            i = i + 2;
        }
        else {
            i++;
        }

    }
    return count;

}