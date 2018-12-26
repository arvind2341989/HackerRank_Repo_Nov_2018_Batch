function jumpingOnClouds(c, k) {
    var energy = 100;
    for (let i = 0; i < c.length; i = i + k){
        if (c[i] == 0) energy -= 1;
        else if (c[i] == 1) energy -= 3;
        else if (i == c.length) {
            break;
        }
    }
    return energy;
}