function twoStrings(s1, s2) {
    var stringSet = new Set();
    for (var i = 0; i < s1.length; i++) {
        stringSet.add(s1.charAt(i));
    }
    for (var i = 0; i < s2.length; i++) {
        if (stringSet.has(s2.charAt(i))) {
            return "YES";
        }
    }
    return "NO";
}