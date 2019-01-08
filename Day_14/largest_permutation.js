function processData(input) {
    let setup = input.split("\n"),
        params = setup[0].split(' ').map(Number),
        n = params[0],
        sweeps = params[1],
        index = [],
        arr = setup[1].split(' ').map(Number);
    for (let int in arr) {
        index[arr[int]] = int;
    }
    for (let i = 0; i < n && sweeps > 0; i++) {
        if (arr[i] === n - i) {
            continue;
        }
        arr[index[n - i]] = arr[i];
        index[arr[i]] = index[n - i];
        arr[i] = n - i;
        index[n - i] = i;
        sweeps--; 
    }
    console.log(arr.join(" ").trim());
} 

/////////////// ignore below code \\\\\\\\\\\\\\\

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});