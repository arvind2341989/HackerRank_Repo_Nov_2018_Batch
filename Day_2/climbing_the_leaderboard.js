function climbingLeaderboard(scores, alice) {
    var rank = [];
    for (var i = 1; i < scores.length; i++) {
        if (scores[i - 1] == scores[i]) { 
            scores.splice(i, 1);
            --i;
        }
    }
    var j = scores.length - 1;
    for (i = 0; i < alice.length; i++) {
        while (alice[i] >= scores[j]) { 
            j--;
        }
        rank.push(j+2);
    }
    return rank;
}