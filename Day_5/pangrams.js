function pangrams(s) {
    var letters=[26];
    var flag = true;
    s = s.toLowerCase();
    for (var i = 0; i < s.length; i++)
    {
        if (s.charAt(i) != ' ')
            letters[s.charAt(i) - 'a']++;
    }
    for (var i = 0; i < 26; i++)
    {
        if (letters[i] < 1) {
            flag = false;
            return ("not pangram");
            break;
        }
    }
    if (flag) {
        return ("pangram");
    }

}