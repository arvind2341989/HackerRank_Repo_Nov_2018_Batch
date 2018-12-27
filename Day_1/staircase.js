function staircase(n) {
    for (var i = 0; i < n; i++) { 
        for (var j = 0; j < n; j++) { 
            if (i + j >= n - 1) {
                process.stdout.write("#");
            }
            else { 
                process.stdout.write(" ");
            }
        }
        process.stdout.write("\n");
    }
}