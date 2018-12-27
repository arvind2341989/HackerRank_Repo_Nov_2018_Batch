function plusMinus(arr) {
    var a = [0, 0, 0];
    for (var i = 0; i < arr.length; i++) { 
        if (arr[i] > 0) {
            a[0]++;
        }
        else if (arr[i] < 0) {
            a[1]++;
        }
        else { 
            a[2]++;
        }
    }
    console.log(a[0] / arr.length + "\n" + a[1] / arr.length + "\n" + a[2] / arr.length );
}