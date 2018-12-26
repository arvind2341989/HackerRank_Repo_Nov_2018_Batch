function sockMerchant(n, ar) {
    var pair = 0;
    ar.sort();
   
    for (var i = 0; i < n;i++) {
        
        if (ar[i] - ar[i + 1] == 0 || ar[i + 1] - ar[i] == 0) {
                
                pair = pair + 1;
            
                console.log(ar[i], ar[i+1]);
            }
        i++;
    } 
   
    

    return pair;
}