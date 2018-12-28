// Complete the marsExploration function below.
function marsExploration(s) {
    var countDiff = 0;
    for (let i = 0; i < Math.floor(s.length/3); i++){
        if (s.charAt(i*3) !== 'S') countDiff++;
        if (s.charAt(i * 3 + 1) !== 'O') countDiff++;
        if (s.charAt(i * 3 + 2) !== 'S') countDiff++;
    }
    return countDiff;
}