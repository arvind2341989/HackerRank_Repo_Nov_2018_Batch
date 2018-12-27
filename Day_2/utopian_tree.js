function utopianTree(n) {
	var initialHeight = 1;
    if (n == 0) return 1;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) initialHeight += 1;
        else initialHeight *= 2;
    }
    return initialHeight;
}