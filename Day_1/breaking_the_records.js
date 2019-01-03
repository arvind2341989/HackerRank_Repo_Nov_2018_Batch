function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    var flag = 0;
    var count = 0;
    for (var i = 0; i < scores.length; i++){
        if (scores[i] < min) {
            min = scores[i];
            flag++;
        }
        if (scores[i] > max) {
            max = scores[i];
            count++;
        }
    }
    var array = [ count,flag];
    return array;

}