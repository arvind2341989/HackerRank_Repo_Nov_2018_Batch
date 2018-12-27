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