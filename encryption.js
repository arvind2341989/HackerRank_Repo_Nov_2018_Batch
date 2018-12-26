function encryption(s) {
    var a = Math.floor(Math.sqrt(s.length)), b = Math.ceil(Math.sqrt(s.length)), k = 0;
    var arr;
    for (var i = 0; i < b; i++) { 
        for (var j = 0; j < b * b; j = j + b) {
            if (arr == undefined) {
                arr = s[i + j];
            }
            else {
                if (s[i + j] != undefined) {
                    arr = arr + s[i + j];
                }
            }
        }
        arr = arr + " ";
    }
    return arr;
}