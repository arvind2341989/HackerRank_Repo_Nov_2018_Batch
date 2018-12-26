// Complete the extraLongFactorials function below.
function extraLongFactorials(n) {
    var factorial = n;
    while (n > 1) {
        var temp1 = factorial + '';
        var temp2 = n - 1 + '';
        var carry = 0;
        var fact = [];
        for (let i = temp1.length - 1; i >= 0; i--){
            var temp3 = (parseInt(temp2, 10) * parseInt(temp1[i], 10)) + carry;
            carry = 0;
            temp3 += '';
            if (temp3.length > 1 && i != 0) {
                carry = parseInt(temp3.slice(0, -1), 10);
                fact.push(temp3.slice(-1));
            }
            else {
                fact.push(temp3);
            }
        }
        factorial = fact.reverse().join('');
        n--;
    }
    console.log(factorial);
}