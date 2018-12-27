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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {
   
    if (isPalindrome(s))
        return -1;
        
    for (var i = 0, j = s.length - 1; i < Math.floor(s.length / 2); i++ , j--) {
        if (s[i] !== s[j]) {

            if (isPalindrome(s.substring(i, j))) {
                return j;
            }
            else {
                return i;
            }
        }
    }
}
function isPalindrome(str) {

    for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++ , j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }

    return true;
}
    

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}
