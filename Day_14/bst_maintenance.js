function solve(arr) {
    const rootNode = {
        index: 0,
        left: null,
        right: null,
        parent: null,
        data: null,
        totalNodeCount: {
            left: 0,
            right: 0,
        },
        totalLevelNodeCount: {
            left: 0,
            right: 0,
        }
    };
    const result = [];
    let totalDistance = 0;
    let maxNode = null;
    let minNode = null;
    let line = '';
    let aggregatedCount = 0;
    for (let i = 0; i < arr.length; i++) {
        const data = arr[i];
        if (rootNode.data === null) {
            rootNode.data = data;
            maxNode = rootNode;
            minNode = rootNode;
            result.push(0);
            continue;
        }

        let insertedNode;
        const isToInsertInMaxNode = data > maxNode.data;
        const isToInsertInMinNode = data < minNode.data;
        if (isToInsertInMaxNode) {
            if (line === 'left') {
                updateTotalsForLine(minNode);
                line = 'no';
            }
            if (line !== 'no') {
                line = 'right';
            }
        } else if (line === 'right') {
            updateTotalsForLine(maxNode);
            line = 'no';
        }

        if (isToInsertInMinNode) {
            if (line === 'right') {
                updateTotalsForLine(maxNode);
                line = 'no';
            }
            if (line !== 'no') {
                line = 'left';
            }
        } else if (line === 'left') {
            updateTotalsForLine(minNode);
            line = 'no';
        }

        if (isToInsertInMaxNode) {
            insertedNode = insertNode(maxNode, data, i);
            maxNode = insertedNode;
        } else if (isToInsertInMinNode) {
            insertedNode = insertNode(minNode, data, i);
            minNode = insertedNode;
        } else {
            insertedNode = insertNode(rootNode, data, i);
        }

        let distanceToParent = 0;
        let childNode = insertedNode;
        let node = insertedNode.parent;
        let distance = 0;
        if (line === 'no') {
            while (node) {
                distanceToParent++;
                const parentNode = node;

                const isLeft = parentNode.left === childNode;

                if (isLeft) {
                    parentNode.totalNodeCount.left++;
                    parentNode.totalLevelNodeCount.left += distanceToParent;
                    distance += distanceToParent * (parentNode.totalNodeCount.right + 1) + parentNode.totalLevelNodeCount.right;
                } else {
                    parentNode.totalNodeCount.right++;
                    parentNode.totalLevelNodeCount.right += distanceToParent;
                    distance += distanceToParent * (parentNode.totalNodeCount.left + 1) + parentNode.totalLevelNodeCount.left;
                }

                childNode = node;
                node = node.parent;
            }
        } else {
            aggregatedCount += i;
            distance += aggregatedCount;
        }

        totalDistance += distance;
        result.push(totalDistance);
    }
    return result;
}

function insertNode(root, data, i) {
    let node = root;
    let insertedNode = null;
    while (node) {
        if (data < node.data) {
            if (node.left) {
                node = node.left;
            } else {
                insertedNode = {
                    index: i,
                    left: null,
                    right: null,
                    parent: node,
                    data: data,
                    totalNodeCount: {
                        left: 0,
                        right: 0,
                    },
                    totalLevelNodeCount: {
                        left: 0,
                        right: 0,
                    }
                };
                node.left = insertedNode;

                break;
            }
        } else {
            if (node.right) {
                node = node.right;
            } else {
                insertedNode = {
                    index: i,
                    left: null,
                    right: null,
                    parent: node,
                    data: data,
                    totalNodeCount: {
                        left: 0,
                        right: 0,
                    },
                    totalLevelNodeCount: {
                        left: 0,
                        right: 0,
                    }
                };
                node.right = insertedNode;
                break;
            }
        }
    }
    return insertedNode;
}

function updateTotalsForLine(leafNode) {
    let node = leafNode;
    const isLeft = node.parent && !!node.parent.left;
    let distanceToParent = 0;
    let aggregatedDistanceToParent = 0;
    while (node) {
        if (isLeft) {
            node.totalNodeCount.left += distanceToParent;
            node.totalLevelNodeCount.left += aggregatedDistanceToParent;
        } else {
            node.totalNodeCount.right += distanceToParent;
            node.totalLevelNodeCount.right += aggregatedDistanceToParent;
        }
        distanceToParent++;
        aggregatedDistanceToParent += distanceToParent;

        node = node.parent;
    }

}