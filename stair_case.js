function staircase(n) {
    for (var i = 1; i <= n; i++) {
        var col = i;
        for (var j = 1; j <= n - col; j++) {
            process.stdout.write(' ');
        }
        for (var j = 1; j <= col; j++) {
            process.stdout.write('#');
        }
        process.stdout.write('\n');
    }

}