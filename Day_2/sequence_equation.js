function permutationEquation(p) {
    var indexArray = [];
    var temp;
    var resArray = [];
    for (var i = 0; i < p.length; i++) {
        indexArray[p[i]] = i + 1;
    }
    for (var x = 1; x <= p.length; x++) {
        temp = indexArray[x];
        resArray.push(indexArray[temp]);
    }
    return resArray;

}
