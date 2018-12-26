function permutationEquation(p) {
    var result = [];
    for (var x = 1; x <= p.length; x++){
        result[p[p[x - 1] - 1] - 1] = x;
    }
    return result;
}