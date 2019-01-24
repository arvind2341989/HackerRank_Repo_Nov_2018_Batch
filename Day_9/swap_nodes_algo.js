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