function birthday(s, d, m) {
    var count = 0,sum;
    for (var i = 0; i <= (s.length-m); i++) {
        sum = 0; 
        for (var j = i; j < i + m; j++) { 
            sum = sum + s[j];
        }
        if (sum == d) { 
            count++;
        }
    }
    return count;
}