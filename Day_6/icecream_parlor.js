function icecreamParlor(m, arr) {
    const choice = [];
    for (let i = 0; i < arr.length; i++) {
        //pick first flavour and find complement 
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