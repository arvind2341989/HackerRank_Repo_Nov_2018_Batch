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

function newNode(value) {
    return {
        data: value,
        left: null,
        right: null
    };
}

function buildBinaryTree(indexes, rootValue) {
    var root = newNode(rootValue);

    if (indexes[rootValue - 1][0] !== -1) {
        root.left = buildBinaryTree(indexes, indexes[rootValue - 1][0]);
    }

    if (indexes[rootValue - 1][1] !== -1) {
        root.right = buildBinaryTree(indexes, indexes[rootValue - 1][1]);
    }

    return root;
}

function inOrder(root, output) {
    if (root === null) {
        return;
    }

    inOrder(root.left, output);
    output.push(root.data);
    inOrder(root.right, output);
}

/*
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, queries) {

    // build the binary tree with the given indexes
    var root = buildBinaryTree(indexes, 1);
    var output = [];

    for (var i = 0; i < queries.length; i++) {

        // perform bfs and swap necessary levels
        var tempRoot = root;
        var queue = [{ node: tempRoot, level: 1 }];

        while (queue.length) {
            var currentNode = queue.shift();

            if (currentNode.level % queries[i] === 0) {
                var temp = currentNode.node.left;
                currentNode.node.left = currentNode.node.right;
                currentNode.node.right = temp;
            }

            if (currentNode.node.left !== null)
                queue.push({ node: currentNode.node.left, level: currentNode.level + 1 });

            if (currentNode.node.right !== null)
                queue.push({ node: currentNode.node.right, level: currentNode.level + 1 });
        }

        var traversal = [];
        inOrder(root, traversal);

        output.push(traversal);
    }

    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let indexes = Array(n);

    for (let indexesRowItr = 0; indexesRowItr < n; indexesRowItr++) {
        indexes[indexesRowItr] = readLine().split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = swapNodes(indexes, queries);

    ws.write(result.map(x => x.join(' ')).join("\n") + "\n");

    ws.end();
}
