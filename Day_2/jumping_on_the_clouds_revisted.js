function jumpingOnClouds(c, k) {
    var energy = 100;
    for (var i = 0; i < c.length;i=i+k){
        if (c[i] == 0) {
            energy=energy--;
        }
        else {
            energy = energy - 2;
        }
        energy--;
}
    return energy;
}