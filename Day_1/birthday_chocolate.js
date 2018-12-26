function birthday(s, d, m) {
    var count = 0;

    for (let i = 0; i < s.length; i++) {

        if ((i + m - 1) == s.length) break;

        else {
            let sumChoco = 0;
            for (let k = 0; k < m; k++) {
                sumChoco += s[i + k];
            }
            if (sumChoco == d) count++;
        }
    }
    return count;

}