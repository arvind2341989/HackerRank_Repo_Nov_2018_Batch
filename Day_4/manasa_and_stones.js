// Complete the stones function below.
function stones(n, a, b) {
    var lastStoneArr = [];
    if (a === b) {
        lastStoneArr.push((n - 1) * a);
    }
    else {
        var minValue = Math.min(a, b);
        var maxValue = Math.max(a, b);
        for (let i = 0; i < n; i++){
            lastStoneArr.push(maxValue * i + minValue * (n - i - 1));
        }
    }
    return lastStoneArr;
}