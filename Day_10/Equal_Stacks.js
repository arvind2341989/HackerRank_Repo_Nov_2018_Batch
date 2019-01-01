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
 * Complete the equalStacks function below.
 */
function equalStacks(h1, h2, h3) {
    const sum = (arr)=>{
       return arr.reduce((sum, value) => sum + value, 0)
   }

   let sum1 = sum(h1);
   let sum2 = sum(h2);
   let sum3 = sum(h3);
   let min = Math.min(sum1,sum2,sum3); 
    
   while(true){
       if(sum1>min){
           sum1 -= h1.shift();
       }
       if(sum2>min){
           sum2 -= h2.shift();
       }
       if(sum3>min){
           sum3 -= h3.shift();
       }
       
       if(sum1 === sum2 && sum2 === sum3){
          return min; 
       }
       min = Math.min(sum1,sum2,sum3);
   } 
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n1N2N3 = readLine().split(' ');

    const n1 = parseInt(n1N2N3[0], 10);

    const n2 = parseInt(n1N2N3[1], 10);

    const n3 = parseInt(n1N2N3[2], 10);

    const h1 = readLine().split(' ').map(h1Temp => parseInt(h1Temp, 10));

    const h2 = readLine().split(' ').map(h2Temp => parseInt(h2Temp, 10));

    const h3 = readLine().split(' ').map(h3Temp => parseInt(h3Temp, 10));

    let result = equalStacks(h1, h2, h3);

    ws.write(result + "\n");

    ws.end();
}
