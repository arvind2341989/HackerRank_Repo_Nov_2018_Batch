function kaprekarNumbers(p, q) {
    var result = [];
    for (var i = p; i <= q; i++){
        var num = i;
        var square = Math.pow(num, 2);
        var squareString = '' + square;
        var d = squareString.length;
        var limit = parseInt(d / 2);
        var leftNum = squareString.substring(0, limit);
        if (leftNum.length == 0) {
            leftNum = "0";
        }
        var rightNum = squareString.substring(limit);
        if (rightNum.length == 0) {
            rightNum = "0";
        }
        var sum = parseInt(leftNum) + parseInt(rightNum);
        sum = '' + sum;
        if (sum == num) {
            result.push(num);
        }
    }
    if (result.length) {
        console.log(result.join(' '));
    }
    else {
        console.log('INVALID RANGE');
    }
}