function acmTeam(topic) {

    var count = 1, max = 0;
    for (var i = 0; i < topic.length - 1; i++) {
        for (var j = i + 1; j < topic.length; j++) {
            var temp = 0;
            for (var k = 0; k < topic[i].length; k++)
                if (topic[i][k] == '1' || topic[j][k] == '1')
                    temp++;
            if (temp > max) {
                max = temp;
                count = 1;
            }
            else if (temp == max)
                count++;
        }
    }
    var ar = [];
    ar.push(max);
    ar.push(count);
    return ar;
}
