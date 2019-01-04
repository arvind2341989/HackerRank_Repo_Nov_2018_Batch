function equalStacks(h1, h2, h3) {
    /*
     * Write your code here.
     */
    let sums = [];
    let stacks = [h1, h2, h3];
    for (let i = 0; i < stacks.length; i++) {
        sums.push(stacks[i].reduce(function (acc, val) { return acc + val; }));
    }

    let found;
    let height = 1;
    while (height > 0) {
        found = false;
        height = Math.min.apply(null, sums);
        for (let i = 0; i < stacks.length; i++) {
            if (stacks[i].length > 0 && height < sums[i]) {
                sums[i] -= stacks[i].shift();
                found = true;
            }
        }

        if (!found) {
            break;
        }
    }

    return height;

}