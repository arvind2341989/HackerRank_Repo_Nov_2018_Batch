// Complete the taumBday function below.
function taumBday(b, w, bc, wc, z) {
    if (bc > wc + z) return b * (wc + z) + w * wc;
    else if (wc > bc + z) return b * bc + w * (bc + z);
    else return b * bc + w * wc;
}