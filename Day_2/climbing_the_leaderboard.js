// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    var scrBrd = 2;
    for (let i = scores.length - 1; i > 0; i--){
        if (scores[i] < scores[i - 1]) scrBrd++;
    }

    var aRank = [];
    var counter = scores.length - 1;
    for (let i = 0; i < alice.length; i++){
        while (alice[i] >= scores[counter]) {
            if (scrBrd === 1) break;

            if (scores[counter] === scores[counter - 1]) counter--;
            else {
                counter--;
                scrBrd--;
            }
        }
        aRank[i] = scrBrd;
    }
    return aRank;
}