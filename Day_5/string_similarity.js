function stringSimilarity(s) {
    
    var suffix = [];
    var sum = s.length;;

    for (let i = 1; i < s.length; i++) {
        suffix.push((s.substring(i, s.length)));
    }
    console.log(suffix);

    for (let i = 0; i < suffix.length; i++) {
        let val = suffix[i];
        let count = 0;
        for (let j = 0; j < val.length; j++) {
            if (val.charAt(j) == s.charAt(j)) {
                count++;
            } else {
                break;
            }
        }
        sum = sum + count;
    }
    return sum;
}