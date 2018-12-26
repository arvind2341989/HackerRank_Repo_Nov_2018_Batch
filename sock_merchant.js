function sockMerchant(n, ar) 
{
    var map = new Map();
    var count = 0;
    var len = ar.length;
    for (var i = 0; i < len; i++){
        if (map.get(ar[i]) === undefined) {
            map.set(ar[i], 1);
        }
        else {
            //element exists
            count++;
            map.delete(ar[i]);
        }
    }
    return count;
}