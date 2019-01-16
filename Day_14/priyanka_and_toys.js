// Complete the toys function below.
function toys(w) {
    w.sort((a, b) => { return a - b; });
    let containers = 1;
    let min = w[0];
    for (let i = 0; i < w.length; i++){
        if (w[i] - min > 4) {
            min = w[i];
            containers++;
        }
    }
    return containers;
}