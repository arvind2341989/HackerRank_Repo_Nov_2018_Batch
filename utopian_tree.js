function utopianTree(n) {
    var height = 1;
    var isSpring = true;
    while (n-- > 0) {
        if (isSpring) {
            height *= 2;
        }
        else {
            height++;
        }
        isSpring = !isSpring;
    }
    return height;
}