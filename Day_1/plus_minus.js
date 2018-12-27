function plusMinus(arr) {
    var pos = 0, neg = 0, zero = 0, size = arr.length;
    for (let i = 0; i < size; i++) { 
        if (arr[i] > 0) {
            pos += 1;
        } else if (arr[i] < 0) {
            neg += 1;
        } else { 
            zero += 1;
        }
    } 
    
    console.log(pos / size);
    console.log(neg / size);
    console.log(zero / size);
}