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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(tree, n) {
    return n * 2 - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let tree = Array(n-1);

    for (let treeRowItr = 0; treeRowItr < n-1; treeRowItr++) {
        tree[treeRowItr] = readLine().split(' ').map(treeTemp => parseInt(treeTemp, 10));
    }

    let result = solve(tree, n);

    ws.write(result + "\n");

    ws.end();
}

