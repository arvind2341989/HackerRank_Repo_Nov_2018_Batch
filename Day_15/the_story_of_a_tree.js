function storyOfATree(n, edges, k, guesses) {
    const nodes = Array(n);
    for (let i=0; i<n; i++) {
        nodes[i] = {
            neighbors: [],
        };
    }
    edges.forEach((e) => {
        nodes[e[0]-1].neighbors.push(e[1]-1);
        nodes[e[1]-1].neighbors.push(e[0]-1);
    });
    buildTree(nodes, 0);
    const guessMap = Array(n);
    for (let i=0; i<n; i++) {
        guessMap[i] = [];
    }
    guesses.forEach((guess) => {
        guessMap[guess[1]-1].push(guess[0] - 1);
    });
    countMatch(nodes, guessMap, 0);
    let p = 0;
    const queue = [0];
    while (queue.length > 0) {
        const i = queue.shift();
        const node = nodes[i];
        let c = node.count;
        
        if (node.parent !== undefined) {
            const parent = nodes[node.parent];
            c = parent.count;
            if (guessMap[i].indexOf(node.parent) >= 0 ) {
                c--;
            }
            if (guessMap[node.parent].indexOf(i) >= 0) {
                c++;
            }
        }
        node.count = c;
        if (c >=k ) {
            p++;
        }
        node.children.forEach((j) => queue.push(j));
    }
    
    let q = n;
    let g = gcd(p, q);
    p = p / g;
    q = q / g;    
    return `${p}/${q}`;
}

function gcd(a, b) {
    while (b !== 0) {
        const mod = a % b;
        a = b;
        b = mod;
    }
    return a;
}

function buildTree(nodes, idx) {
    const root = nodes[idx];
    root.children = [];
    root.neighbors.forEach((i) => {
        if (root.parent !== i) {
            nodes[i].parent = idx;
            root.children.push(i);
            buildTree(nodes, i);
        }
    });
}

function countMatch(nodes, guessMap, idx) {
    const root = nodes[idx];
    let count = 0;
    root.children.forEach((i) => {
        if (guessMap[i].indexOf(idx) >= 0) {
            count++;
        }
        count += countMatch(nodes, guessMap, i);
    });
    root.count = count;
    return count;
}