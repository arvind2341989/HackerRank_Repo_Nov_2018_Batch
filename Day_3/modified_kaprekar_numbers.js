function kaprekarNumbers(p, q) {

    var count = 0;
    for (var i = p; i <= q; i++) {

        var square = Math.floor(Math.pow(i, 2)).toString();
        if (square.length > 1) {
            const l = Math.floor(square.substring(0, square.length / 2));
            const r = Math.floor(square.substring(square.length / 2));
            if ((l + r) == i) {
                process.stdout.write(i + " ");
                count++;
            }
        } else if (Math.floor(square) == i){
            process.stdout.write(i + " ");
            count++;
        }
    } 
    if (count == 0) {
        process.stdout.write("INVALID RANGE");
    }
}
