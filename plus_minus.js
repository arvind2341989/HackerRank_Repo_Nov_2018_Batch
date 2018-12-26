function plusMinus(arr) {

    var i=0,arr1=0,a = 0, b = 0, c = 0;
    for (i = 0; i < arr.length; i++)
    {
        arr1 = arr[i];
        if (arr1 > 0) {
            a += 1;
        }
        else if (arr1 < 0) {
            b += 1;
        }
        else {
            c += 1;
        }

        
    }

    var positives = a / (arr.length);
    var negatives = b / (arr.length);
    var zeroes = c / (arr.length);

    console.log(positives);
    console.log(negatives);
    console.log(zeroes);


}