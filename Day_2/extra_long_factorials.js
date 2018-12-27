function extraLongFactorials(n) {
    var num = n;
    var factorial = num;
    while(num > 1){
        let a = factorial + '';
        let b = num - 1 + '';
        
        //basically we are implementing integer multiplication using strings
        //by taking carry forward and multiplying manually

        //KARATSUBA MULTIPLICATION CAN BE APPLIED 

        let carry = 0;
        let z = [];
        for (var i = a.length - 1; i >= 0; i--) {
            let c = (parseInt(b, 10) * parseInt(a[i], 10)) + carry;
            carry = 0;
            c += '';
            if (c.length > 1 && i != 0) {
                carry = parseInt(c.slice(0, -1), 10);
                z.push(c.slice(-1));
            } else {
                z.push(c);
            }
        }
        factorial = z.reverse().join('');
        num--;
    }
    console.log(factorial);
}