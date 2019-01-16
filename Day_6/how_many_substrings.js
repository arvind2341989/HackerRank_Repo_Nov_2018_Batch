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

function lcp(a, b) {
    var minLen = Math.min(a.length, b.length),
        counter = 0,
        i;
    for (i = 0; i < minLen; i++) {
        if (a[i] == b[i]) counter++;
        else break;
    }
    return counter;
}

function main() {
    var [n, q] = readLine().split(' ').map(Number),
        i;
    var s = readLine();

    for(i = 0; i < q; i++){
        let [left, right] = readLine().split(' ').map(Number),
            substr = s.substring(left, right + 1),
            name = left + '-' + right,
            suffixes = [], j, possible, mem = {};
        
        if (mem[name]){
            console.log(mem[name]);  
            continue;
        } 
        
        for (j = substr.length; j > 0; j--) {
            suffixes.push(substr.substr(j * (-1)))
        }

        if (suffixes.length <= 1) {
            console.log(suffixes.length);
            mem[name] = suffixes.length;
            continue;
        }

        suffixes.sort();
        possible = suffixes[0].length;

        for (j = 1; j < suffixes.length; j++) {
            possible += suffixes[j].length - lcp(suffixes[j-1], suffixes[j]);
        }
        
        mem[name] = possible;
        console.log(possible);
    }

}