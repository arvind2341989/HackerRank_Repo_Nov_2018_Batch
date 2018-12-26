function utopianTree(n) {
    var i = 1, height = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            height += 1;
        }
        else {
            height *= 2;
        }
        i++;
    }
    return height;
  
        
}
