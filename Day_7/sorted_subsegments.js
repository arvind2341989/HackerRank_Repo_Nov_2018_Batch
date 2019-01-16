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
 * Complete the sortedSubsegments function below.
 */
function sortedSubsegments(k, a, queries) {
    var arr = a, start = queries[0][0], end = queries[0][1];
    var left = arr.slice(0, start);
    var sort = arr.slice(start, end + 1).sort((a, b) => a - b);
    var right = arr.slice(end + 1);
    arr = left.concat(...sort, ...right);
    
    if (queries.length > 1) {
        start = Infinity, end = -Infinity;
        for (var i = 1; i < queries.length; i++) {
            start = Math.min(start, queries[i][0]);
            end = Math.max(end, queries[i][1]);
        }
        var left = arr.slice(0, start);
        var sort = arr.slice(start, end + 1).sort((a, b) => a - b);
        var right = arr.slice(end + 1);
        arr = left.concat(...sort, ...right);        
    }
    
    return arr[k];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nqk = readLine().split(' ');

    const n = parseInt(nqk[0], 10);

    const q = parseInt(nqk[1], 10);

    const k = parseInt(nqk[2], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let queries = Array(q);

    for (let queriesRowItr = 0; queriesRowItr < q; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = sortedSubsegments(k, a, queries);

    ws.write(result + "\n");

    ws.end();
}
