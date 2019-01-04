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

function Node() {
    this.index = [];
    this.indexH = [];
    this.children = {};
}

function Trie() {
    var root = new Node();
    function add(word, node, index, health) {
        var char, previousHealth = 0, len;
        if (word === '') {
            len = node.index.length;
            if (len) {
                previousHealth = node.indexH[len - 1];
            }
            node.index.push(index);
            node.indexH.push(health + previousHealth);
            return;
        }
        char = word[0];
        if (!node.children[char]) {
            node.children[char] = new Node();
        }
        add(word.substr(1), node.children[char], index, health);
    }
    return {
        add: function (word, index, health) {
            add(word, root, index, health);
        },
        getRoot: function () {
            return root;
        }
    }
}

function findIndex(arr, start, end, val) {
    var index = Math.floor((end - start) / 2) + start;
    if (arr[index] === val) return index;
    if (arr[start] === val) return start;
    if (arr[end] === val) return end;
    if (arr[index] > val) {
        end = index;
    } else {
        start = index;
    }
    if (end - start <= 1) {
        if (arr[end] < val) {
            return end;
        }
        return start;
    }
    return findIndex(arr, start, end, val);
}

function main() {
    var n = parseInt(readLine());
    var genes = readLine().split(' ');
    var health = readLine().split(' ');
    health = health.map(Number);
    var s = parseInt(readLine());

    /***************/
    var trie = new Trie();
    var minRating = null;
    var maxRating = null;

    genes.forEach((gene, index) => {
        trie.add(gene, index, health[index]);
    });
    /***************/

    for (var a0 = 0; a0 < s; a0++) {
        var first_temp = readLine().split(' ');
        var first = parseInt(first_temp[0]);
        var last = parseInt(first_temp[1]);
        var d = first_temp[2];

        // your code goes here

        var len = d.length;
        var rating = 0;

        var getSum = function (cn) {
            var cnIndexLen = cn.index.length;
            var startIndex, endIndex;
            if (cnIndexLen === 0) return;
            startIndex = findIndex(cn.index, 0, cnIndexLen - 1, first - 1);
            endIndex = findIndex(cn.index, 0, cnIndexLen - 1, last);
            if (cn.index[endIndex] <= last) {
                rating += cn.indexH[endIndex];
            }
            if (cn.index[startIndex] < first) {
                rating -= cn.indexH[startIndex];
            }
        };

        for (var j = 0; j < len; j++) {
            var iter = j;
            var node = trie.getRoot();
            do {
                node = node.children[d[iter++]];
                if (!node) {
                    break;
                }
                getSum(node);
            } while (iter < len);
        }

        minRating = minRating === null ? rating : Math.min(minRating, rating);
        maxRating = maxRating === null ? rating : Math.max(maxRating, rating);
    }

    console.log(minRating, maxRating);
}
