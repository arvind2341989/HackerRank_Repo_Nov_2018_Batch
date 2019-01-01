// Complete the separateNumbers function below.
function separateNumbers(s) {
    const BigNumber = require('bignumber.js');

    var isValid = false;
    var firstX = -1;
    var strLen = BigNumber(s.length);
    var counter = BigNumber(1);

    for (counter; counter.lte(strLen.div(2)); counter = counter.plus(1)){
        let x = BigNumber(s.slice(0, counter));
        firstX = x;

        let test = x.toString();
        while (test.length < s.length) {
            test += (x = (x.plus(1))).toString();
        }
        if (test === s) {
            isValid = true;
            break;
        }
    }
    let ans = isValid ? 'YES ' + firstX : 'NO';
    console.log(ans);
}