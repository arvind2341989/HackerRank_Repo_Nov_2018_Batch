function utopianTree(n) {
    var height = 1;
    for (var j = 0; j < n; j++) { 
        if (j % 2 == 0) {
            height = height * 2;
        }
        else { 
            height = height + 1;
        }
    }
    return height;
}