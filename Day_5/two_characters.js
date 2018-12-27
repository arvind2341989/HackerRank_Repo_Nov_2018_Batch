function alternate(s) {
    if (s.length == 1) {
        return 0;
    }
    var maxlength = 0;
    var set = new Set();
    for (var i = 0; i < s.length; i++) {
        set.add(s.charAt(i));
    }
    var array = new Array(set.size);
    array = Array.from(set);
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var lengthOfSubstring = lengthOfCharacter(array[i], array[j], s);
            if (lengthOfSubstring > maxlength) {
                maxlength = lengthOfSubstring;
            }
        }
    }
    return maxlength;
}

function lengthOfCharacter(p, q, s){
    var a = p;
    var b = q;
    var whatIsFirst = 0;
    var count = 1;
    var i;
    var firstElement = s.indexOf(a) < s.indexOf(b) ? a : b;
    if (firstElement == a) {
        whatIsFirst = 0;
        i = s.indexOf(a) + 1;
    }
    else {
        whatIsFirst = 1;
        i = s.indexOf(b) + 1;
    }
    while (i < s.length) {
        if (whatIsFirst == 0 && s.charAt(i) == b) {
            whatIsFirst = 1;
            count++;
        }
        else if (whatIsFirst == 1 && s.charAt(i) == a) {
            whatIsFirst = 0;
            count++;
        }
        else if (whatIsFirst == 0 && s.charAt(i) == a || whatIsFirst == 1 && s.charAt(i) == b) {
            return -1;
        }
        i++;
    }
    return count;
} 