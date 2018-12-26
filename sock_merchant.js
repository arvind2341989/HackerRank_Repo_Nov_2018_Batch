function sockMerchant(n, ar) {
    var sum = 0, color = ar[0], count = 0;
    for (var i = 0; i < n-1; i++) { 
        for (var j = i+1; j < n; j++) { 
            if (ar[i] > ar[j]) {
                ar[i] = ar[i] + ar[j];
                ar[j] = ar[i] - ar[j];
                ar[i] = ar[i] - ar[j];
            }
        }
    }
    
    for (i = 0; i < n; i++) { 
        if (color == ar[i]) {
            count++;
        }
        else if (color != ar[i]) { 
            color = ar[i];
            sum = sum + Math.floor(count / 2);
            count = 1;
        }
    }
    sum = sum + Math.floor(count / 2);
    return sum;
}