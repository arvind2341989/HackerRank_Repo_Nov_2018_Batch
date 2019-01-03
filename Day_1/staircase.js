function staircase(n) {
    var a = n;
    for (var i = 0; i < n; i++) {
        a--;
        for (var j = 0; j < n; j++) {
            if (j < a) {
                process.stdout.write(" ");
            } else {
                process.stdout.write("#");
            }  
        }
        console.log();
    }
}