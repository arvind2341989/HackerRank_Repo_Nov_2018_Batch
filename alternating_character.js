function alternatingCharacters(s) {
    var count = 0;
  
        for (var i = 0; i < s.length; i++) {
            if (s.charAt(i) == s.charAt(i + 1))
                count++;
        }
        
    return count;

}