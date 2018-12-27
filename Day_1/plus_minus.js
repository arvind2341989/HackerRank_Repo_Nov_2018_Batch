function plusMinus(arr) {

    var pos = 0;
    var neg = 0;
    var zero = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0)
            neg++;
        else if (arr[i] == 0)
            zero++;
        else
            pos++;
    }
    
    console.log((pos / arr.length).toPrecision(6));
    console.log((neg / arr.length).toPrecision(6));
    console.log((zero / arr.length).toPrecision(6));


}
