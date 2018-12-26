function countingValleys(n, s) {
    var count = 0, valley = 0;
    for (var i = 0; i < n; i++) { 
        if (s[i] == 'U') {
            count = count + 1;
            if (count == 0) {
                valley++;
                console.log(count + " " + valley);
            }
        }
        else {
            count--;
            console.log(count);
        }
    }
    return (valley);
}