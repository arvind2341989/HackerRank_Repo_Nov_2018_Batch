function staircase(n) {
    var numberOfSpaces = 0;
    var numberOfHashes = 0;
    for (var i = 0; i < n; i++){
        numberOfHashes = i + 1;
        numberOfSpaces = n - numberOfHashes;
        while (numberOfSpaces-- > 0) {
            process.stdout.write(" ");
        }
        while (numberOfHashes-- > 0) {
            process.stdout.write("#");
        }
        process.stdout.write("\n");
    }
}