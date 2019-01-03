function printShortestPath(n, i1, j1, i2, j2) {
    var i = i1 - i2, j = j1 - j2;
    if (i % 2 === 1 || (i / 2 + j) % 2 === 1) {
        process.stdout.write("Impossible");
        return;
    }
    i /= 2;
    if (j >= i && i >= 0) {
        process.stdout.write((i + j) / 2 + "\n");
        process.stdout.write(("UL ".repeat(i) + "L ".repeat((j - i) / 2)).slice(0, -1));
        return;
    }
    if (i >= j && i >= -j) {
        process.stdout.write(i + "\n");
        process.stdout.write(("UL ".repeat((i + j) / 2) + "UR ".repeat((i - j) / 2)).slice(0, -1));
        return;
    }
    if (i >= 0 && i <= -j) {
        process.stdout.write((i - j) / 2 + "\n");
        process.stdout.write(("UR ".repeat(i) + "R ".repeat(-(i + j) / 2)).slice(0, -1));
        return;
    }
    if (j <= i && i <= 0) {
        process.stdout.write(-(i + j) / 2 + "\n");
        process.stdout.write(("R ".repeat((i - j) / 2) + "LR ".repeat(-i)).slice(0, -1));
        return;
    }
    if (i <= j && i <= -j) {
        process.stdout.write(-i + "\n");
        process.stdout.write(("LR ".repeat(-(i + j) / 2) + "LL ".repeat((j - i) / 2)).slice(0, -1));
        return;
    }
    if (i <= 0 && i >= -j) {
        process.stdout.write((j - i) / 2 + "\n");
        process.stdout.write(("LL ".repeat(-i) + "L ".repeat((i + j) / 2)).slice(0, -1));
        return;
    }
}