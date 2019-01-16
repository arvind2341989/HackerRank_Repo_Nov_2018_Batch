// Complete the maximumPerimeterTriangle function below.
function maximumPerimeterTriangle(sticks) {
    var sLen = sticks.length;
    sticks.sort((a, b) => { return a - b; });
    var side1 = sticks[sLen - 1];
    var side2 = sticks[sLen - 2];
    var side3;
    for (let i = sLen - 3; i >= 0; i--){
        side3 = sticks[i];
        if ((side3 + side2) > side1) return [side3, side2, side1];
        side1 = side2;
        side2 = side3;
    }
    return [-1];
}