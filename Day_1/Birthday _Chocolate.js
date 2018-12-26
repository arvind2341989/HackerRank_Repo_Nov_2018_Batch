function birthday(s, d, m) {
    var count = 0;
    for (let i = 0; i < s.length; i++) {

        if ((i + m - 1) == s.length) {
            break;
        }
        else {
            let sum = 0;
            for (let j = 0; j < m ; j++) {
                sum += s[i + j];
            }

            if (sum == d) {
                count++;
            }
        }
    }

    return count;

}