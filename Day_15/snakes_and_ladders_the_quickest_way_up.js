'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the quickestWayUp function below.
function quickestWayUp(ladders, snakes) {
    const visitedMap = Array(100);
    const teleportMap = new Map();
    ladders.forEach((d) => {
        teleportMap.set(d[0] - 1, d[1] - 1);
    });
    snakes.forEach((d) => {
        teleportMap.set(d[0] - 1, d[1] - 1);
    });

    const queue = [{
        idx: 0, count: 0,
    }];
    visitedMap[0] = true;
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.idx === 99) {
            return node.count;
        }
        for (let i = 1; i <= 6; i++) {
            let nextIdx = node.idx + i;
            if (teleportMap.has(nextIdx)) {
                nextIdx = teleportMap.get(nextIdx);
            }
            if (!visitedMap[nextIdx]) {
                queue.push({
                    idx: nextIdx,
                    count: node.count + 1,
                });
                visitedMap[nextIdx] = true;
            }
        }
    }
    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let ladders = Array(n);

        for (let i = 0; i < n; i++) {
            ladders[i] = readLine().split(' ').map(laddersTemp => parseInt(laddersTemp, 10));
        }

        const m = parseInt(readLine(), 10);

        let snakes = Array(m);

        for (let i = 0; i < m; i++) {
            snakes[i] = readLine().split(' ').map(snakesTemp => parseInt(snakesTemp, 10));
        }

        let result = quickestWayUp(ladders, snakes);

        ws.write(result + "\n");
    }

    ws.end();
}
