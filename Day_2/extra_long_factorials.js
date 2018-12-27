function extraLongFactorials(n) {
    if (n === 0)
        return '1'

    if (!n)
        return ''

    var i, nextNumber, carret,

        result = n.toString().split('').reverse().map(Number)

    while (--n) {
        i = carret = 0

        while ((nextNumber = result[i++]) !== undefined || carret) {
            carret = (nextNumber || 0) * n + carret
            result[i - 1] = carret % 10
            carret = parseInt(carret / 10)
        }
    }

    console.log(result.reverse().join(''));
}