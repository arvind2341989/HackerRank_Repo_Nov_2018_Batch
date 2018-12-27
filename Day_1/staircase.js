function staircase(n) {
    for ( var i = 1; i <= n; i++) {
        /* Print spaces in decreasing order of row */
        for (j = i; j < n; j++) {
            process.stdout.write(' ');
        }

        /* Print star in increasing order or row */
        for (var j = 1; j <= i; j++) {
            process.stdout.write('#');
        }

        /* Move to next line */
        process.stdout.write('\n');
    }


}
