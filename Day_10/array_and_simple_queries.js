function randInt() { return Math.floor(Math.random() * 2e9); }

function size(t) { return t ? t.size : 0; }

function createNode(value, prio, left, right) {
    return {
        value: value,
        prio: prio === undefined ? randInt() : prio,
        size: size(left) + size(right) + 1,
        left: left || null,
        right: right || null
    }
}

function merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    
    if (left.prio <= right.prio) {
        return createNode(right.value, right.prio, merge(left, right.left), right.right);
    } else {
        return createNode(left.value, left.prio, left.left, merge(left.right, right));
    }
}

function split(t, pos) {
    var currentPos = size(t.left);
//    console.log('splitting', pos, currentPos, '(' + size(t) + ')', pos === currentPos);
    if (currentPos === pos) {
        var lessThanPos = t.left;
        var greaterThanOrEqualPos = createNode(t.value, t.prio, null, t.right);;
        return [lessThanPos, greaterThanOrEqualPos];
    } else if (pos < currentPos) {
        var parts = split(t.left, pos);
        return [parts[0], createNode(t.value, t.prio, parts[1], t.right)];
    } else {
        var parts = split(t.right, pos - currentPos - 1);
        return [createNode(t.value, t.prio, t.left, parts[0]), parts[1]];
    }
}


function toTreap(a) {
    function append(t, v) {
        return merge(t, createNode(v));
    }
    
    return a.reduce(append, null);
}

function each(t, f) {
    var pos = 0;
    function _each(t) {
        if (!t) return;
        _each(t.left);
        f(t.value, pos++);
        _each(t.right);
    }
    
    _each(t);
}

function printTreap(t) {
    var values = new Array(size(t));
    each(t, function(val, pos) {
        values[pos] = val;
    });
    console.log(values.join(' '));
}

function first(t) {
    var node = t;
    while(node.left) node = node.left;
    return node.value;
}

function last(t) {
    var node = t;
    while(node.right) node = node.right;
    return node.value;
}

function applyCommand(t, command) {
    var parts = command.split(' ').map(Number),
        cmd = parts[0],
        from = parts[1],
        to = parts[2];

    var splitResult1 = split(t, to),
        leftAndSub = splitResult1[0],
        right = splitResult1[1],
        splitResult2 = split(leftAndSub, from-1),
        left = splitResult2[0],
        sub = splitResult2[1],
        leftAndRight = merge(left, right);
    
    return (cmd === 1) ? merge(sub, leftAndRight) : merge(leftAndRight, sub);
}


function processData(input) {
    var lines = input.split('\n'),
        values = lines[1].split(' '),
        commands = lines.slice(2);
    
    var treap = toTreap(values);
    var result = commands.reduce(applyCommand, treap);
    console.log(Math.abs(first(result) - last(result)));
    printTreap(result);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
