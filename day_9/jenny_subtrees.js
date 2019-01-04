function jennysSubtrees(n, r, edges) {
    /*
     * Write your code here.
     */
    
    let nodes = {};
    
    // build up the data structure
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        
        if (!nodes[edge[0]]) {
            nodes[edge[0]] = { data: edge[0], children: [] };
        }
        
        if (!nodes[edge[1]]) {
            nodes[edge[1]] = { data: edge[1], children: [] };
        }
        
        nodes[edge[0]].children.push(nodes[edge[1]]);
        nodes[edge[1]].children.push(nodes[edge[0]]);
    }
    
    let subTrees = [];
    
    for (let n in nodes) {
        let node = nodes[n];
        
        subTrees.push(getTree(node, r));
    }
    
    // now remove any isomorphic
    for (let i = subTrees.length - 1; i > 0; i--) {
        
        let foundAnother = false;
        let ind = -1;
        for (let j = i-1; j >= 0; j--) {
            if (areIsomorphic(subTrees[i], subTrees[j])) {
                foundAnother = true;
                ind = j;
                break;
            }
        }
        
        if (foundAnother) {
            subTrees.splice(i, 1);
        }
    }
    
    return subTrees.length;
}