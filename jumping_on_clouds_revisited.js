function jumpingOnClouds(c, k, n) {
    var energy = 100, i = 0, times = 0;

    var isStart = true;

    while (i != 0 || isStart) {
        
        if (i == 0 && isStart) {
            isStart = false;
        }
        if (c[i] === 1) {
            energy = energy - 2;
        }
        energy--;
        i = (i + k) % n;

    }
    return energy;
}
