function pickingNumbers(a) {
    var index = [];
    a.sort(function (a, b) { return (a - b); });
    var x = 0;
    for (let i = 0; i < a.length; i++) {
        index[i] = 0;
        while (a[i] == (x+1)) { 
            index[i]++;
            i++;
        }
        x++;       
    }
    var max = 0;
    for (let i = 0; i < index.length; i=i+2) { 
        if (a[i] + a[i + 1] > max && a[i] + a[i + 1] <=5) { 
            max = a[i] + a[i + 1];
        }
    }
    return max;    
}