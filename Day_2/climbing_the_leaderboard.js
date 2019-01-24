function climbingLeaderboard(scores, alice) {

    var res = [];
    var n = [scores[0]], k = n[0];

    for (var i = 1; i < scores.length; i++) {
        if (scores[i] != k) {
            k = scores[i];
            n.push(k);
        }
    }

    var j = n.length - 1;

    for (var i = 0; i < alice.length; i++) {
        while (n[j] <= alice[i]) {
            j--;
        }
        res.push(j + 2);
    }

    return res;



}