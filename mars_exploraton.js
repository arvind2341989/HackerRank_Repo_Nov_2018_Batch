function marsExploration(s) {
    var sos = "SOS";
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] != sos[i % 3]) {
            sum++;
        }
    }
    return sum;

}