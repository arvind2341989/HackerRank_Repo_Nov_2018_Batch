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

// Complete the poisonousPlants function below.
function poisonousPlants(p) { 
    var maxDaysAlive = 0;
    var stack = [];
    
    for (var i = 0; i < p.length; i++){
        var daysAlive = 0; 

        while(stack.length > 0 && p[i] <= stack[stack.length - 1].plant)
            daysAlive = Math.max(daysAlive, stack.pop().days); 
        
        
        if (stack.length === 0) 
            daysAlive = 0;
            
        else 
            daysAlive += 1;
        
        maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        
        stack.push({ 
            plant: p[i],
            days : daysAlive
        });
    }
    return maxDaysAlive;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
