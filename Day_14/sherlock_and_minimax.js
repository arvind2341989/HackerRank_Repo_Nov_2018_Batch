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

function sherlockAndMinimax(arr, p, q) {
 var sorted = arr.sort((a, b) => a - b);    
    var qualified = [], first = 0, start = 0;
    for(var i=0; i< sorted.length; i++){
        var s = sorted[i];
        if(s >= p){
            if(i==0){
                start = i;
                first = s - 2*(s - p);
            }else{
                var l = sorted[i-1];
                var mid = l + parseInt((s-l)/2, 10);
                if(p <= mid){
                    first = l;
                    start = i;
                }else{
                    first = s - 2*(s - p);
                    start = i;
                }
            }
            break;
        }
    }
    var last = 0;
    var end = 0;    
    for(var i=sorted.length-1; i>= 0; i--){
        var s = sorted[i];
        if(s <= q){
            if(i==sorted.length-1){
                end = i;
                last = s + 2 * (q-s);
            }else{
                var r = sorted[i+1];
                var mid = s + parseInt((r-s)/2, 10);
                if(q > mid){
                    last = r;
                    end = i;
                }else{
                    last = s + 2*(q - s);
                    end = i;
                }
            }
            break;
        }
    }    
    var ourArr = [];
    ourArr[ourArr.length] = first;
    for(var i=start; i<=end; i++){
        ourArr[ourArr.length] = sorted[i];
    }
    ourArr[ourArr.length] = last;    
    var maxPoint = getMaxMid(ourArr);
    return maxPoint;

}

function getMaxMid(arr){
    var maxDiffBy2 = -1;
    var num = -1;
    for (var i=arr.length-1; i>0; i--){
        var diff = arr[i] - arr[i-1];
        var diffBy2 = parseInt(diff/2, 10);
        if(maxDiffBy2 < 0){
            maxDiffBy2 = diffBy2;
            num = arr[i-1]+diffBy2;
        }
        if(diffBy2 >= maxDiffBy2){
            maxDiffBy2  = diffBy2;
            num = arr[i-1]+diffBy2;
        }
    }
    return num;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const pq = readLine().split(' ');

    const p = parseInt(pq[0], 10);

    const q = parseInt(pq[1], 10);

    let result = sherlockAndMinimax(arr, p, q);

    ws.write(result + "\n");

    ws.end();
}
