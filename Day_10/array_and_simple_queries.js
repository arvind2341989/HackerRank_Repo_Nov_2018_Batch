function processData(input) {
    var inputSplit = input.split('\n');
    var elements = inputSplit[1].split(' ').map(Number);
    var treapRoot = TreapNode(elements[0]);
    //console.log(treapRoot.value);
    for (var i = 1; i < elements.length; i++) {
        treapRoot = append(elements[i], treapRoot);
        //console.log(treapRoot.value);
    }
    for (var i = 2; i < inputSplit.length; i++) {
        var op = inputSplit[i].split(' ').map(Number);
        if (op[0] === 1) {
            treapRoot = splitBeginning(treapRoot, op[1], op[2]);
        } else {
            treapRoot = splitEnd(treapRoot, op[1], op[2]);
        }
    }
    console.log(difference(treapRoot));
    console.log(print(treapRoot).trim());
}

function Number(element) {
    return parseInt(element);
}

//Let's build the implicit treap
//NODE INFO:
//left, right, size, value, hNum(heap number)

function TreapNode(value) {
    var treapNode = {};
    treapNode.left = null;
    treapNode.right = null;
    treapNode.size = 1;
    treapNode.value = value;
    treapNode.hNum = Math.random();
    return treapNode;
}

function splitBeginning(treapNode, start, end) {
    var diff = end - start + 1;
    var firstSplit = split(treapNode, start - 1);
    var mid = firstSplit[0];
    var secondSplit = split(firstSplit[1], diff);
    var beg = secondSplit[0];
    var end = secondSplit[1];
    var bigBeg = merge(beg, mid);
    return merge(bigBeg, end);
}

function splitEnd(treapNode, start, end) {
    var diff = end - start + 1;
    var firstSplit = split(treapNode, start - 1);
    var beg = firstSplit[0];
    var secondSplit = split(firstSplit[1], diff);
    var mid = secondSplit[1];
    var end = secondSplit[0];
    var bigBeg = merge(beg, mid);
    return merge(bigBeg, end);
}


function calcSize(treapNode) {
    treapNode.size = 1;
    if (treapNode.left) {
        treapNode.size += treapNode.left.size;
    }
    if (treapNode.right) {
        treapNode.size += treapNode.right.size;
    }
}

function split(treapNode, value, checker) {
    if (checker == null) {
        checker = 0;
    }
    if (value == 0) {
        return [null, treapNode];
    }
    var L = null;
    var R = null;
    var leftSize = 0;
    //console.log(treapNode.value + "value: " + value + " checker: " + checker);
    if (treapNode.left) {
        leftSize = treapNode.left.size;
    }
    var newCheck = leftSize + 1 + checker;
    if (newCheck === value) {
        L = copy(treapNode);
        setRight(null, L);
        R = treapNode.right;
    } else if (newCheck < value) {
        L = copy(treapNode);
        var res = split(treapNode.right, value, newCheck);
        setRight(res[0], L);
        R = res[1];
    } else {
        R = copy(treapNode);
        var res = split(treapNode.left, value, checker);
        setLeft(res[1], R);
        L = res[0];
    }
    return [L, R];
}

function merge(L, R) {
    if (L == null) {
        return R;
    }
    if (R == null) {
        return L;
    }
    var root = null;
    if (L.hNum <= R.hNum) {
        root = L;
        setRight(merge(root.right, R), root);
    } else {
        root = R;
        setLeft(merge(L, root.left), root);
    }
    return root;
}

function append(value, treapNode) {
    var newNode = TreapNode(value);
    var that = merge(treapNode, newNode);
    return that;
}

function setRight(node, treapNode) {
    if (node == null) {
        treapNode.right = null;
    } else {
        treapNode.right = node;
    }
    calcSize(treapNode);
}

function setLeft(node, treapNode) {
    if (node == null) {
        treapNode.left = null;
    } else {
        treapNode.left = node;
    }
    calcSize(treapNode);
}

function set(node) {
    if (node == null) {
        return null;
    }
    treapNode.setRight(node.right);
    treapNode.setLeft(node.left);
    treapNode.value = node.value;
    treapNode.size = treapNode.calcSize();
    treapNode.hNum = node.hNum;
}

function difference(treapNode) {
    return Math.abs(findMin(treapNode).value - findMax(treapNode).value);
}

function findMin(treapNode) {
    if (treapNode.left) {
        return findMin(treapNode.left);
    }
    return treapNode;
}

function findMax(treapNode) {
    if (treapNode.right) {
        return findMax(treapNode.right);
    }
    return treapNode;
}

function print(treapNode) {
    var left = '';
    var right = '';
    if (treapNode.left) {
        left = print(treapNode.left);
    }
    if (treapNode.right) {
        right = print(treapNode.right);
    }
    return left + treapNode.value + ' ' + right;

}

function copy(oldObj) {
    if (oldObj == null) {
        return oldObj;
    }
    var newObj = TreapNode(oldObj.value);
    setLeft(oldObj.left, newObj);
    setRight(oldObj.right, newObj);
    newObj.hNum = oldObj.hNum;
    newObj.size = oldObj.size;

    return newObj;
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