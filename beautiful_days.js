function beautifulDays(i, j, k) {
    var reverse,number, result=0;
    for (var r = i; r <= j; r++) {
        
        number = r;
        reverse = 0;
        while (number != 0)
        {
            var temp = parseInt(number % 10);
            reverse = parseInt(reverse * 10+temp);
            number = parseInt(number / 10);
        }
        if ((reverse - r) % k == 0)
        {
            result++;
     }
        
    }
    
    return result;
}