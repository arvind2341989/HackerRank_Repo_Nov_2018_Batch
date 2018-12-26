function plusMinus(arr) {
    var a = 0; var b = 0; var c = 0; var l = arr.length;
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0) {
            b++;
        } else if (arr[i] > 0) {
            a++;
        } else {
            c++;
        }
    }
    console.log(a / l);
    console.log(b / l);
    console.log(c / l);

}