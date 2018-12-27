function plusMinus(arr) {
    var n = arr.length;
    var numberOfPositiveNumbers = 0;
    var numberOfNegativeNumbers = 0;
    var numberOfZeroes = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] > 0) {
            numberOfPositiveNumbers++;
        }
        else if (arr[i] < 0) {
            numberOfNegativeNumbers++;
        }
        else {
            numberOfZeroes++;
        }
    }
    console.log(numberOfPositiveNumbers / n);
    console.log(numberOfNegativeNumbers / n);
    console.log(numberOfZeroes / n);
}