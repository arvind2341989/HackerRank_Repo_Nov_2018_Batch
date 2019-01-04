function processData(input) {
    //Enter your code here
    var inputs = input.split('\n');
    var first = inputs.shift();
    var stacks = inputs;

    var j, i, value, max = 0, sum, map = {};
    var values = [];
    for (i = 0; i < stacks.length; i++) {
        values = stacks[i].split(' ');
        sum = 0;
        for (j = values.length - 1; j > -1; j--) {
            value = +values[j];
            sum += value;
            if (!map[sum]) {
                map[sum] = 1;
            } else {
                map[sum] = map[sum] + 1;
            }

            if (map[sum] === stacks.length && sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);


}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});