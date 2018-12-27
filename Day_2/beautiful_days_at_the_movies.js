function beautifulDays(i, j, k) {
    var dates = 0, dates_rev = 0, count = 0, check = 0;
    for (dates = i; dates <= j; dates++) {
        var dates_rev = reverseInt(dates);
        if ((Math.abs(dates-dates_rev) % k) == 0) {
            count++;
        }
    }
    return count;
}
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reversed);
}
