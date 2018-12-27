function anagram(s) {
    if (s.length % 2 == 0) {
        var firstHalf = s.substring(0, s.length / 2).split('');
        var secondHalf = s.substring(s.length / 2, s.length);
        for (var i = 0; i < firstHalf.length; i++) {
            var charPos = secondHalf.indexOf(firstHalf[i]);
            if (charPos >= 0) {
                secondHalf = secondHalf.substring(0, charPos) + secondHalf.substring(charPos + 1, secondHalf.length);
            }
        }
        return secondHalf.length;
    }
    return -1;
}