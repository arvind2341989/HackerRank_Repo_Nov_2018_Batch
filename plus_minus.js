function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var length = arr.length;
    for (var i = 0; i < length; i++) { 
        if (arr[i] < 0) {
            negative++;
        }
        else if (arr[i] > 0) {
            positive++;
        }
        else { 
            zero++;
        }

    }
    positive /= length;
    negative /= length;
    zero /= length;

    console.log(positive);
    console.log(negative);
    console.log(zero);
}
