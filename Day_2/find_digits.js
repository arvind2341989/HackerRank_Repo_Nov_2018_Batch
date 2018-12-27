function findDigits(n) {
    var temp, digit, count = 0;
    temp = n;
    while (temp > 0)
    {
        digit = temp % 10;
        if ((digit != 0) && (n % digit == 0))
        { count++; }
        temp = parseInt(temp / 10);
    }
    
    return count;
}