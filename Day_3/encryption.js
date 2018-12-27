function encryption(s) {
    var result = "";
    var l = s.length;
    var r = Math.floor(Math.sqrt(l));
    var c = Math.ceil(Math.sqrt(l));
    if ((r * c) < l)
        r++;
    for (var i = 0; i < c; i++) {
        for (var j = i; j < l; j += c) {
            result = result + s[j];
        }
        result = result + " ";
    }
    return result;

}
