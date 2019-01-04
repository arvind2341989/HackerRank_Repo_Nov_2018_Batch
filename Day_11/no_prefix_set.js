function processData(input) {
    var stdInput = readLine().split(' ');
    var qCount = parseInt(stdInput[0], 10);
    var queires = [];
    for (let i = 0; i < qCount; i++)
        queires[i] = readLine().split(' ');
    var checkSet = true;
    var failPoint = '';
    for (let i = 1; i < qCount; i++){
        if (queires[i].toString().indexOf(queires[i - 1].toString()) > -1 || 
            queires[i-1].toString().indexOf(queires[i].toString()) > -1
            ) {
            checkSet = false;
            failPoint = queires[i].toString();
            break;
        }
    }
    if (checkSet) {
        outer:
        for (let i = 0; i < qCount; i++){
            for (let j = i + 1; j < qCount; j++){
                if (queires[j].toString().indexOf(queires[i].toString()) > -1 ||
                    queires[i].toString().indexOf(queires[j].toString()) > -1
                ) {
                    checkSet = false;
                    failPoint = queires[j].toString();
                    break outer;
                }
            }
        }
    }
    if (!checkSet) {
        console.log("BAD SET");
        console.log(failPoint);
    } else console.log("GOOD SET");
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
let currentLine = 0;
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    _input = _input.trim().split('\n').map(str => str.trim());
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}
