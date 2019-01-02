function beautifulQuadruples(a, b, c, d) {
    /*
     * Write your code here.
     */


    let quadruplets = -1 / 24 * a * (a * a * a - 2 * a * a * (2 * d + 3) + a * (-6 * c * c + 6 * c * (2 * d + 1) + 12 * d + 11) - 2 * (2 * b * b * b - 6 * b * b * (d + 1) + b * (-6 * c * c + 12 * c * d + 6 * c + 6 * d + 4) - 3 * c * c + 6 * c * d + 3 * c + 4 * d + 3));


    const memo = {};

    for (let w = 1; w <= a; ++w) {
        for (let x = w; x <= b; ++x) {
            const wx = w ^ x;
            let map = memo[wx];

            if (!map) {
                map = {};

                let runningTotal = 0;
                for (let y = c; y >= 1; --y) {
                    const wxy = wx ^ y;

                    if (y <= wxy && wxy <= d) {
                        map[y] = runningTotal++ + 1;
                    } else {
                        map[y] = runningTotal;
                    }
                }
                memo[wx] = map;
            }

            quadruplets -= map[x];
        }
    }
    return quadruplets;
    //console.log(Math.round(quadruplets));

}