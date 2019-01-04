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

/*
 * Complete the downToZero function below.
 */
function downToZero(n) {
    /*
     * Write your code here.
     */
    return moves[n]
}
let moves = [0]
for (let i = 0; i < 1000000; i++) {
    if (!moves[i + 1]) moves[i + 1] = Number.MAX_SAFE_INTEGER
    moves[i + 1] = Math.min(moves[i + 1], moves[i] + 1)
    let j = 2
    while (j <= i && j * i <= 1000000) {
        if (!moves[i * j]) moves[i * j] = Number.MAX_SAFE_INTEGER
        moves[i * j] = Math.min(moves[i * j], moves[i] + 1)
        j += 1
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let result = downToZero(n);

        ws.write(result + "\n");
    }

    ws.end();
}
