function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var a = lines[1].split(' ').map(Number);
    var b = lines[2].split(' ').map(Number);
    
    var count = 0;
    for (var i = 0; i < n; i++) {
        var l = b.length;
        for (var j = 0; j < l; j++) {
            if (a[i] == b[j]) {
                count++;
                b.splice(j,1);
                break;
            }
        }
    }
    
    var res = count + (b.length > 0 ? 1 : -1);
    console.log(res);
    
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