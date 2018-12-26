function staircase(n) {
    var temp = n;
    for (let i = 0; i < n; i++){
        var space = "";
        var pattern = "";
        for (let j = temp-1; j > 0; j--) space = space + " ";
        for (let k = 0; k <= i; k++){
            pattern = pattern + "#";
        }
        console.log(space + pattern);
        temp--;
    }
}