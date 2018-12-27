// Complete the countingValleys function below.
function countingValleys(n, s) {
    var valleys = 0;
    var groundlevel = 0;
    
    for (var i = 0; i < n; i++) {
        if (s[i] == 'U') {
            groundlevel = groundlevel + 1;
        }
        else if (s[i] == 'D') {
            groundlevel = groundlevel - 1;
        }
        if (groundlevel == 0 && s[i] == 'U') {
            valleys++;
        }
    }
    return valleys;

}