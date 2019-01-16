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

// Complete the maximumValue function below.
var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

function maximumValue(a) {
    var result = Number.NEGATIVE_INFINITY;
    for(var i = 0 ; i < a.length; i++){
        var sum = 0;
        var max = a[i];
        var gcdTemp = Math.abs(a[i]);
        for(var j = i; j < a.length; j++){
            sum += a[j];
            max = Math.max(max,a[j]);
            gcdTemp = gcd(gcdTemp,Math.abs(a[j]));
            var temp = gcdTemp*(sum-max);
            if(temp > result) {result = temp;}
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = maximumValue(a);

    ws.write(result + "\n");

    ws.end();
}
