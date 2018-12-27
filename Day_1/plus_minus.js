function plusMinus(arr) {
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) negativeCount++;
        else if (arr[i] > 0) positiveCount++;
        else zeroCount++;
    } 

    var positiveFraction = positiveCount / arr.length;
    var negativeFraction = negativeCount / arr.length;
    var zeroFraction = zeroCount / arr.length;

    console.log(positiveFraction.toFixed(6));   
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
}