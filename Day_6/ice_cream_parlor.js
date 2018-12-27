function findComplementIdx(arr, index, complement) {
    return arr.findIndex((number, idx) => number == complement && idx !== index);
}
// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {


    const choice = [];
    for (let i = 0; i < arr.length; i++) {
        // 1. pic first flavour and find complement 
        let complement = m - arr[i];
        if (complement < 1) continue;

        let complementIdx = findComplementIdx(arr, i, complement);

        if (complementIdx !== -1) {
            choice.push(i + 1);
            choice.push(complementIdx + 1);
            break;
        }
    }
    return choice;

}