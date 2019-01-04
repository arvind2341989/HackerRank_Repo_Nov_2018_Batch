

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
 * Complete the twoStacks function below.
 */
function twoStacks(x, a, b) {
    var apos = -1;
    var bpos = -1;
    var sum = 0;
    while(sum + b[bpos+1] <= x)
        sum += b[++bpos];
    var best = apos+bpos;
    while (bpos > -2) {
        if (sum + a[apos+1] <= x) {
            sum += a[++apos];
            best = Math.max(best, apos+bpos);
        } else
            sum -= b[bpos--];
    }
    return Math.max(best, apos+bpos)+2;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const nmx = readLine().split(' ');

        const n = parseInt(nmx[0], 10);

        const m = parseInt(nmx[1], 10);

        const x = parseInt(nmx[2], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

        let result = twoStacks(x, a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
