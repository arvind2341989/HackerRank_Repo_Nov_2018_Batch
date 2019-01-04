// Complete the largestRectangle function below.
function largestRectangle(h) {
    let max = 0;
    for (let i = 0; i < h.length; i++){
        let rectLength = 1;
        for (let x = i + 1; x < h.length; x++){
            if (h[i] <= h[x]) rectLength++;
            else break;
        }
        for (let y = i - 1; y >= 0; y--){
            if (h[i] <= h[y]) rectLength++;
            else break;
        }
        if (h[i] * rectLength > max) max = h[i] * rectLength;
    }
    return max;
}