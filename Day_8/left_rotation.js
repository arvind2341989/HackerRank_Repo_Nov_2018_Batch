function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    var n1 = d%n;
    var a1 = [];
    for (var i = 0; i < a.length; i++){
        a1.push(a[(i + n1)%a.length]);
    }
    
    for (var i = 0; i < a1.length; i++){
        process.stdout.write(a1[i]+" ");
    }
    
}