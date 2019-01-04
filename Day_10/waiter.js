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
 * Complete the waiter function below.
 */
function waiter(number, q) {
    
    function nextPrime(value) {
        if (value > 2) {
            var i, q;
            do {
                i = 3;
                value += 2;
                q = Math.floor(Math.sqrt(value));
                while (i <= q && value % i) {
                    i += 2;
                }
            } while (i <= q);
            return value;
        }
        return value === 2 ? 3 : 2;
    }

    function getPrime(i) {
        var value = 0, result = [];
        for (var j = 0; j < i; j++) {
            value = nextPrime(value);
            result.push(value);
        }
        return result[i-1];
    }

    var ret = [], p, v;
    var A = [number], B = [[]];
    for (let i = 1; i <= q; i++) {
        A.push([]); B.push([]);
        p = getPrime(i);
        while (A[i-1].length > 0) {
            v = A[i-1].pop();
            if (v % p === 0) {
                B[i].push(v)
            } else {
                A[i].push(v);
            }
        }
    }
    for (let i = 1; i <= q; i++) {
        while(B[i].length > 0) {
            ret.push(B[i].pop())
        }
    }
    for (let i = 1; i <= q; i++) {
        while(A[i].length > 0) {
            ret.push(A[i].pop())
        }
    }
    return ret;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    const number = readLine().split(' ').map(numberTemp => parseInt(numberTemp, 10));

    let result = waiter(number, q);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
