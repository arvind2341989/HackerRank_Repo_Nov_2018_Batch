function hackerrankInString(s) {
    var str = "hackerrank";
    if (s.length< str.length ){
        return "NO";
    }
    var j = 0;
    for (var i = 0; i < s.length; i++) {
        if (j < str.length && s.charAt(i) == str.charAt(j)) {
            j++;
        }
    }
    if (j == str.length)
    {
        return "YES";
    } 
    else {
        return "NO";
     }


}