function gameOfThrones(s) {
    //Take a count array
    var charCounts = {
        'a': 0,
        'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0,
        'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0,
        't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
    };
    for (var i = 0; i < s.length; i++) {
        charCounts[s[i]]++;
    }

    var numOdd = 0;
    for (var key in charCounts) {
        if (charCounts[key] % 2 !== 0) {
            numOdd++;
        }
    }
    return numOdd > 1 ? "NO" : "YES";
}