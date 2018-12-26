function birthdayCakeCandles(ar) {
    var len = ar.length;
    var greatest = Math.max(...ar);
    var number = 0;
    for (var i = 0; i < len; i++){
        if (ar[i] == greatest) { number = number + 1 }
        
    }
    return number;
   

}