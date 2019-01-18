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

// Complete the countArray function below.
function countArray(n, k, x) {
    var mod = 1000000007;
    var dp = new Array(n + 1).fill(0);
    dp[3] = (x == 1) ? k - 1 : k - 2;
    dp[2] = (x == 1) ? 0 : 1;
    for (var i = 4; i <= n; ++i) {
        dp[i] += dp[i-2] * (k - 1) + dp[i-1] * (k - 2);
        dp[i] %= mod;
    }
    return dp[n];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nkx = readLine().split(' ');

    const n = parseInt(nkx[0], 10);

    const k = parseInt(nkx[1], 10);

    const x = parseInt(nkx[2], 10);

    let answer = countArray(n, k, x);

    ws.write(answer + "\n");

    ws.end();
}
