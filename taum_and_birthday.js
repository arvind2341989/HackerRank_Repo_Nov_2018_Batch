function taumBday(b, w, bc, wc, z) {
    var answer = (b * Math.min(bc, wc + z)) + (w * Math.min(wc, bc + z));
    return answer;

}