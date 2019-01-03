function taumBday(b, w, bc, wc, z) {
    var cost = 0;
    if (bc > wc + z) {
        cost = (b * (wc + z)) + w*(wc);
    }
    else if (wc > bc + z) {
        cost = (b*(bc) + w * (bc + z));
    } else {
        cost = w * wc + b * bc;   
    }
    return cost;
}