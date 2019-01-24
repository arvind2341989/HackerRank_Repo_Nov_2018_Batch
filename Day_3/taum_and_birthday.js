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

// Complete the taumBday function below.
function taumBday(b, w, bc, wc, z) {

    function multiply(n1, n2) {
        var d1 = n1 + '';
        var d2 = n2 + '';
        var carry = 0;
        var num = [];
        for (var i = d1.length - 1; i >= 0; i--) {
            var d3 = (parseInt(d2, 10) * parseInt(d1[i], 10)) + carry;
            carry = 0;
            d3 += '';
            if (d3.length > 1 && i != 0) {
                carry = parseInt(d3.slice(0, -1), 10);
                num.push(d3.slice(-1));
            } else {
                num.push(d3);
            }
        }
        return num.reverse().join('');
    }

    function add(n1, n2) {
        var d1 = n1 + '';
        var d2 = n2 + '';
        var carry = 0;
        var num = [], d3;
        for (var i = d1.length - 1, j = d2.length - 1; Math.max(i, j) >= 0; i-- , j--) {
            if (i < 0) {
                d3 = parseInt(d2[j], 10) + carry;
            } else if (j < 0) {
                d3 = parseInt(d1[i], 10) + carry;
            } else {
                d3 = (parseInt(d1[i], 10) + parseInt(d2[j], 10)) + carry;
            }
            carry = 0; d3 += '';
            if (d3.length > 1 && Math.max(i, j) != 0) {
                carry = parseInt(d3.slice(0, -1), 10);
                num.push(d3.slice(-1));
            } else {
                num.push(d3);
            }
        }
        return num.reverse().join('');
    }

    var result;
    if (bc > add(wc, z)) {
        result = add(multiply(b, add(wc, z)), multiply(w, wc));
    } else if (wc > add(bc, z)) {
        result = add(multiply(b, bc), multiply(w, add(bc, z)));
    } else {
        result = add(multiply(b, bc), multiply(w, wc));
    }
    if (result == 0) {
        return 0;
    } else {
        return result;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const bw = readLine().split(' ');

        const b = parseInt(bw[0], 10);

        const w = parseInt(bw[1], 10);

        const bcWcz = readLine().split(' ');

        const bc = parseInt(bcWcz[0], 10);

        const wc = parseInt(bcWcz[1], 10);

        const z = parseInt(bcWcz[2], 10);

        let result = taumBday(b, w, bc, wc, z);

        ws.write(result + "\n");
    }

    ws.end();
}
