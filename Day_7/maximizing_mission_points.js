'use strict';

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

function main() {
    const nD_latD_long = readLine().split(' ');

    const n = parseInt(nD_latD_long[0], 10);

    const d_lat = parseInt(nD_latD_long[1], 10);

    const d_long = parseInt(nD_latD_long[2], 10);
    var latitudeLongitude = [], score = 0, p;
    for (var i = 0; i < n; i++) {
        latitudeLongitude[i] = readLine().split(' ');
        for (var j = 0; j < latitudeLongitude[i].length; j++) { 
            latitudeLongitude[i][j] = parseInt(latitudeLongitude[i][j]);
        }
        score += latitudeLongitude[i][3];
    }
    console.log(score);
}
