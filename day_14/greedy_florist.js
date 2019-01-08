
function processData(input) {
    let setup = input.split("\n"),
        params = setup[0].split(' ').map(Number),
        flowers = setup[1].split(' ').map(Number).sort((a,b) => b - a),
        N = params[0],
        K = params[1], 
        total = 0;
    if (K >= N) {
        console.log(flowers.reduce( (prev, curr) => prev + curr ));    
    } else {
        for (let i = 0; i < N; i++) {
            total += Math.floor(i / K + 1) * flowers[i];
        }    
        console.log(total);
    }
} 

/////////////// ignore below code \\\\\\\\\\\\\\

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});