function extraLongFactorials(n) {
    var i, b;
    i = n;
    while (n > 1) {
        let a = i + '';
        let b = (n - 1) + '';
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
        i = z.reverse().join('');
        --n;
    }
    console.log(i);
}