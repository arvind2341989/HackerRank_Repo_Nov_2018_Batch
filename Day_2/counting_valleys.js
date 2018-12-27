function countingValleys(n, s) {  
    var i = 0, count = 0, valley = 0;
    for (i = 0; i < n; i++) {
        if (s[i]=='D') {
            count--;
        }
        else if(s[i]=='U') {
            count++;
            if (count == 0) {
                valley++;
            }
        }
    }
    return valley;
}