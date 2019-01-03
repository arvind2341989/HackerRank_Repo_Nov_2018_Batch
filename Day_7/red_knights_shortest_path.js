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

// Complete the printShortestPath function below.
function printShortestPath(n, i_start, j_start, i_end, j_end) { 

    function r(x1, y1, x2, y2, path) {
        if (y1 != y2 && Math.abs(y1 - y2) % 2 != 0) {
            return [];
        }
        else if (Math.abs(x1 - x2) % 2 != 0 && y1 == y2) {
            return [];
        }
        if (y1 - y2 > 0) {
            if (x1 - x2 >= 0) {
                path.push('UL');
                return r(x1 - 1, y1 - 2, x2, y2, path);
            }
            else {
                path.push('UR');
                return r(x1 + 1, y1 - 2, x2, y2, path);
            }
        } else if (y2 - y1 > 0) {
            if (x1 - x2 >= 0) {
                path.push('LL');
                return r(x1 - 1, y1 + 2, x2, y2, path);
            }
            else {
                path.push('LR');
                return r(x1 + 1, y1 + 2, x2, y2, path);
            }
        } else if (x1 - x2 > 0) {
            path.push('L');
            return r(x1 - 2, y1, x2, y2, path);
        } else if (x2 - x1 > 0) {
            path.push('R');
            return r(x1 + 2, y1, x2, y2, path);
        }
        return path;
    }

    var path = r(j_start, i_start, j_end, i_end, []);
    if (path.length == 0) {
        console.log('Impossible');
    } else {
        var order = ['UL', 'UR', 'R', 'LR', 'LL', 'L'];
        console.log(path.length);
        console.log(
            path.sort((a,b) => (
                order.indexOf(a) - order.indexOf(b)
            )).join(' ')
        );
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const i_startJ_start = readLine().split(' ');

    const i_start = parseInt(i_startJ_start[0], 10);

    const j_start = parseInt(i_startJ_start[1], 10);

    const i_end = parseInt(i_startJ_start[2], 10);

    const j_end = parseInt(i_startJ_start[3], 10);

    printShortestPath(n, i_start, j_start, i_end, j_end);
}
