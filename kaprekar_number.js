[12/19/2018 4:40:17 PM] Nithila Reddy Gaddam: function kaprekarNumbers(p, q) {

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

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
