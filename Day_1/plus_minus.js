function plusMinus(arr) {
    var positive = 0, negative = 0, zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }

    }
    var positive1 = (positive / arr.length).toPrecision(6);
    var negative1 = (negative / arr.length).toPrecision(6);
    var zero1 = (zero / arr.length).toPrecision(6);
    
    console.log(positive1);
    console.log(negative1);
    console.log(zero1);

}