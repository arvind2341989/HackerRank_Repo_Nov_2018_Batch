function countSubstrings(s, queries) {

    /*
     * Write your code here.
     */
    var st = s;
    var que = queries;
    var result = [];
    for (var i = 0; i < que.length; i++) {
        if (que[i][0] < que[i][1]) {
            var uni = [], m = 2, index = que[i][0], next = que[i][0];
            for (var j = que[i][0]; j <= que[i][1]; j++) {
                var str = '', match = false;
                for (var k = 0; k < m; k++) {
                    if (j !== que[i][1] && index <= que[i][1]) {
                        str += st[index];
                        if (k !== m - 1) {
                            index++;
                        }
                    }
                }
                if (uni.length === 0) {
                    uni.push(str);
                } else {
                    uni.map(item => {
                        if (item === str) {
                            match = true;
                        }
                    });
                    if (!match) {
                        if (str) {
                            uni.push(str);
                        }
                    }
                }
                if (j !== que[i][1]) {
                    next += 1;
                    index = next;
                }
                var eql = ((que[i][1] - que[i][0]) + 1);
                if (m === eql) {
                    break;
                }
                if (j === que[i][1]) {
                    m += 1;
                    index = que[i][0];
                    next = que[i][0];
                    j = que[i][0];
                }
            }
        }
        var getUniques = unique(que[i][0], que[i][1], st);
        if (uni === undefined) {
            result.push(getUniques.length);
        } else {
            result.push(getUniques.length + uni.length);
        }
        uni = [];
    }
    return result;
}
