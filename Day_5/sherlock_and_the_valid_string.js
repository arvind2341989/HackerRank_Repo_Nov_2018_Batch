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

var alpha = "bcdefghijklmnopqrstuvwxyz";

function readLine() {
    return inputString[currentLine++];
}

// Complete the isValid function below.
function isValid(str) {
    str = str.split("");
    const letterCount = {};
    let size = 0;

    for (let i = 0; str.length > i; i++) {
        if (!letterCount[str[i]]) {
            letterCount[str[i]] = 1;
        } else {
            letterCount[str[i]] = letterCount[str[i]] + 1;
        }
    }
    let currentNum = 0;
    let differences = 0;

    Object.keys(letterCount).forEach(key => {
        size++;

        if (currentNum === 0) {
            currentNum = letterCount[key];
        }
        if (letterCount[key] !== currentNum) {
            if (
                letterCount[key] - currentNum !== 1 ||
                letterCount[key] - currentNum < -1
            ) {
                return "NO";
            } else {
                differences++;
            }
        }
    });

    if (size - differences === 1) {
        differences = 1;
    }

    if (differences === 1) {
        return "YES";
    } else {
        return "NO";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
