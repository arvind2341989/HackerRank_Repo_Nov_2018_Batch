function jumpingOnClouds(c, k) {
    var energy = 100;
    var n = c.length;
    var index = 0;
    while (1) {
        var element = c[index];
        if (element == 1) {
            energy -= 2;
        }
        energy--;
        index = (index + k) % n;
        if (index == 0) {
            break;
        }
    }
    return energy;
}