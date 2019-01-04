process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var g = parseInt(readLine());
    for (var a0 = 0; a0 < g; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var x = parseInt(n_temp[2]);
        a = readLine().split(' ');
        a = a.map(Number);
        b = readLine().split(' ');
        b = b.map(Number);
        console.log(solve(a, b, x));
    }

    function solve(a, b, x) {
        var lengthB = 0;
        var sum = 0;
        while (lengthB < b.length && sum + b[lengthB] <= x) {
            sum += b[lengthB];
            lengthB++;
        }
        var maxScore = lengthB;
        for (var lengthA = 1; lengthA <= a.length; lengthA++) {
            sum += a[lengthA - 1];

            while (sum > x && lengthB > 0) {
                lengthB--;
                sum -= b[lengthB];
            }

            if (sum > x) {
                break;
            }
            maxScore = Math.max(maxScore, lengthA + lengthB);
        }
        return maxScore;
    }

}