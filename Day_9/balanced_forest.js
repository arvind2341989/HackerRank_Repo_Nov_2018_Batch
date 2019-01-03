function balancedForest(c, edges) {
    var nodes = createTree(c, edges);
    var root = nodes[1];
    var totalSum = root.sum;
    var min = undefined;
    if (totalSum % 2 == 0 && existsHalf(root, totalSum / 2)) {
        min = totalSum / 2;
    }

    var n = c.length;
    var potentialNodes = [];

    for (var i = 1; i <= n; i++) {
        var nodeI = nodes[i];
        if (totalSum / 3 <= nodeI.sum && nodeI.sum <= 2 * totalSum / 3) {
            potentialNodes.push(nodeI);
        }
    }

    for (var i = 0; i < potentialNodes.length; i++) {
        var nodeI = potentialNodes[i];

        for (var j = 1; j <= n; j++) {
            var nodeJ = nodes[j];
            if (nodeJ.ind == nodeI.ind) {
                continue;
            }

            var s1 = nodeI.sum;
            var s2 = nodeJ.sum;

            if (isParent(nodeI.ind, nodeJ.ind, nodes)) {
                s1 = nodeJ.sum;
                s2 = nodeI.sum - nodeJ.sum;
            } else if (isParent(nodeJ.ind, nodeI.ind, nodes)) {
                s1 = nodeI.sum;
                s2 = nodeJ.sum - nodeI.sum;
            }

            var s3 = totalSum - s1 - s2;
            if (s1 == s2) {
                if (s3 < s1) {
                    min = min == undefined ? s1 - s3 : Math.min(min, s1 - s3);
                }
            } else if (s1 == s3) {
                if (s2 < s1) {
                    min = min == undefined ? s1 - s2 : Math.min(min, s1 - s2);
                }
            } else if (s2 == s3) {
                if (s1 < s2) {
                    min = min == undefined ? s2 - s1 : Math.min(min, s2 - s1);
                }
            }
        }
    }

    //debugger;
    return min || -1;
}