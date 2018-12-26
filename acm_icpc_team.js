function acmTeam(topic) {
    var len = topic.length;
    var subLen = topic[0].length;
    var maxSubCount = 0;
    for (var i = 0; i < len; i++){
        for (var j = i + 1; j < len; j++){
            var first = topic[i].split('');
            var second = topic[j].split('');
            var subCount = 0;
            for (var k = 0; k < subLen; k++){
                if (first[k] == '1' || second[k] == '1') {
                    subCount++;
                }
            }
            if (subCount > maxSubCount) {
                maxSubCount = subCount;
            }
            
        }
    }
    var numberOfTeams = 0;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            var first = topic[i].split('');
            var second = topic[j].split('');
            subCount = 0;
            for (var k = 0; k < subLen; k++) {
                if (first[k] == '1' || second[k] == '1') {
                    subCount++;
                }
            }
            if (subCount == maxSubCount) {
                numberOfTeams++;
            }
        }
    }
    return [maxSubCount, numberOfTeams];
}