function main() {
    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    for (var i = 0; i < n; i++) {
        process.stdout.write(a[(i + d) % n] + " ");

    }
}