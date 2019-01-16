// Complete the luckBalance function below.
function luckBalance(k, contests) {
    var checkLuck = [];
    var luck = 0;
    for (let i = 0; i < contests.length; i++){
        if (contests[i][1] == 0) luck += contests[i][0];
        else checkLuck.push(contests[i][0]);
    }
    checkLuck.sort((a, b) => { return b - a; });
    for (let i = 0; i < checkLuck.length; i++){
        if (i < k) luck += checkLuck[i];
        else luck -= checkLuck[i];
    }
    return luck;
}