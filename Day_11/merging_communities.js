process.stdin.resume();
process.stdin.setEncoding("utf-8");

let _input = "";
let currentLine = 0;
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input = _input.trim().split('\n').map(str => str.trim());
    processData(_input);
});

function readLine() {
    return _input[currentLine++];
}

function processData(input) {
    const stdInput = readLine().split(' ');
    const nPeoples = parseInt(stdInput[0], 10);
    const nQueries = parseInt(stdInput[1], 10);
    var counter = nQueries;
    var queries = Array(counter);
    var comSet = {};
    for (let i = 0; i < counter; i++){
        queries[i] = readLine().split(' ');
    }
    for (let i = 0; i < counter; i++){
        let v1 = parseInt(queries[i][1]);
        let v2 = parseInt(queries[i][2]);
        switch (queries[i][0]) {
            case "Q":
                console.log(comSet[v1] ? find(comSet[v1]).count : 1);
                break;
            case "M":
                if (!comSet[v1] && !comSet[v2]) {
                    comSet[v1] = makeSet(v1);
                    comSet[v2] = makeSet(v2);
                }
                else if (!comSet[v1]) comSet[v1] = makeSet(v1);
                else if (!comSet[v2]) comSet[v2] = makeSet(v2);
                merge(comSet[v1], comSet[v2]);
                break;                
        }
    }
}

function makeSet(a) {
    a = { v: a };
    a.parent = a;
    a.rank = 0;
    a.count = 1;
    return a;
}

function merge(a, b) {
    var rootA = find(a);
    var rootB = find(b);
    if (rootA == rootB) return;
    if (rootA.rank < rootB.rank) {
        rootA.parent = rootB;
        rootB.count += rootA.count;
    } else if (rootA.rank > rootB.rank) {
        rootB.parent = rootA;
        rootA.count += rootB.count;
    } else {
        rootA.parent = rootB;
        rootB.rank += 1;
        rootB.count += rootA.count;
    }
}

function find(a) {
    if (a.parent != a) {
        a.parent = find(a.parent);
    }
    return a.parent;
}
