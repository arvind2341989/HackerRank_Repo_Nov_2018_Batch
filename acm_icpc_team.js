function acmTeam(topic) {
    var count = 1;
    var subCount = Number.MIN_VALUE;
    for (var i = 0; i < topic.length; i++) {
        for (var j = i + 1; j < topic.length; j++) {
            var tempSubCount = 0;
            for (var k = 0; k < topic[i].length; k++) {
                if (topic[i].charAt(k) | topic[j].charAt(k)) {
                    tempSubCount++;
                }
                if (tempSubCount > subCount) {
                    subCount = tempSubCount;
                    count = 1;
                }
                else if (tempSubCount == subCount)
                    count++;
            }
        }
    }
    var res = [subCount, count];
    return res;
}