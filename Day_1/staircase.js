function staircase(n) {
    for (var i = 0; i < n; i++) {
        for (j = n; j > i+1; j--) {
            process.stdout.write(" ");
        }

        for (var j = 0; j <= i; j++) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}
