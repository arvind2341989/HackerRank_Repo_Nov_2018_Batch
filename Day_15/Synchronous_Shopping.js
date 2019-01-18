var processData = (k, shopItems, graph) => {
    var options = calculateOptions(k, shopItems, graph);
    var solution = findOptimalSolution(k, options);
    return solution;
}

var findOptimalSolution = (k, options, showDebug) => {
    var allItems = (1 << k) - 1;
    var min = Infinity;
    for (var i in options) {
        for (var j in options) {
            if ((i | j) === allItems) {
                min = Math.min(min, Math.max(options[i], options[j]));
            }
        }
    }
    return min;
}

var calculateOptions = (k, shopItems, graph) => {
    var dist = {}, queue = [];
    var comparer = (a, b) => queue[a][0] - queue[b][0];// dist[a1][a2]-dist[b1][b2];

    for (var v = 0; v < graph.length; v++) dist[v] = {};
    
    queue.push([0, 0, shopItems[0]]);
    dist[0][shopItems[0]] = 0;
    var cost, src, current_shops, tmp;
    while (queue.length) {
        cost = queue[0][0];
        src = queue[0][1];
        current_shops = queue[0][2];
        queue[0] = queue[queue.length - 1];
        queue.pop();
        var swapIndex = 0, parent, leftChild, rightChild;
        while (swapIndex != parent) {
            parent = swapIndex;
            leftChild = (parent << 1) + 1;
            rightChild = leftChild + 1 ;
            if(leftChild < queue.length && comparer(leftChild, swapIndex) < 0) swapIndex = leftChild;
            if(rightChild < queue.length && comparer(rightChild, swapIndex) < 0) swapIndex = rightChild;
            if(swapIndex != parent){
                tmp = queue[parent];
                queue[parent] = queue[swapIndex];
                queue[swapIndex] = tmp;
            }
        }

        for (var i = 0; i < graph[src].length; i++) {
            var neighbour = graph[src][i][0];
            var mask = (current_shops | shopItems[neighbour]);
            var altCost = cost + graph[src][i][1];
                
            var currentDist = dist[neighbour][mask];
            if (currentDist === undefined || currentDist >= altCost) {
                dist[neighbour][mask] = altCost;
                queue.push([altCost, neighbour, mask]);
                
                var child = queue.length - 1, parent = (child - 1) >> 1;
                while(child != 0 && comparer(child, parent) < 0) {
                    tmp = queue[child];
                    queue[child] = queue[parent];
                    queue[parent] = tmp;
                    child = parent;
                    parent = (child - 1) >> 1;
                }
                    
            }
        }
    }

    return dist[graph.length - 1];
}

var parseInput = (lines) => {
    var n, m, k, shopItems = [], graph = [];

    [n, m, k] = lines.shift();
    for (var i = 0; i < n; i++) {
        shopItems[i] = lines.shift().splice(1).reduce((s, c) => s |= (1 << (c - 1)), 0);
        graph[i] = [];
    }

    for (var j = 0; j < m; j++) {
        var [x, y, cost] = lines.shift();
        graph[x-1].push([y-1, cost]);
        graph[y-1].push([x-1, cost]);
    }

    return [k, shopItems, graph];
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
var buffer = [];
process.stdin.on("data", input => buffer.push(input));
process.stdin.on("end", () => {
    var lines = buffer.join('').split('\n').map(l => l.split(' ').map(n => ~~n));
    var [k, shopItems, graph] = parseInput(lines);
    var result = processData(k, shopItems, graph);
    process.stdout.write(result.toString() + '\n');
});
