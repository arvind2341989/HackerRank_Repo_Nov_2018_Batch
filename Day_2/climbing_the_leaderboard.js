function climbingLeaderboard(scores, alice) {
    var scoresLen = scores.length;
    var aliceLen = alice.length;
    var result = [];
    var temp = scores[0];
    var value = [temp];
    for (var i = 1; i < scoresLen; i++) {
        if (scores[i] != temp) {
            temp = scores[i];
            value.push(temp);
        }
    }

    var j = value.length - 1;
    for (var i = 0; i < aliceLen; i++) {
        while (value[j] <= alice[i]) {
            j--;
        }
        result.push(j + 2);
    }
    return result;
}