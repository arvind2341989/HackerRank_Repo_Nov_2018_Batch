function pangrams(s) {
    var i = 0, count = 0;
    while (i < s.length) {
        var lowercase = String.fromCharCode(97 + count);
        var uppercase = String.fromCharCode(65 + count);
        if (s.includes("" + lowercase) || s.includes("" + uppercase)) {
            count++;
        }
        i++;
    }
    if (count == 26) {
        return "pangram";
    }
    return "not pangram";
}