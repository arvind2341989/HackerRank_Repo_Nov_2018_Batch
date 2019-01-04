 static String happyLadybugs(String s) {
        boolean hasUnderscore = false;
        boolean allAreHappy = true;
        int countArray[] = new int[26];

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '_') {
                hasUnderscore = true;
            } else {
                countArray[s.charAt(i) - 'A']++;
                if (( i > 0 && s.charAt(i-1) == s.charAt(i)) || (i+1 < s.length() && s.charAt(i+1) == s.charAt(i))) {
                } else {
                    allAreHappy = false;
                }
            }
        }
        
        if (allAreHappy) {
            return "YES";
        }
        
        if (!hasUnderscore) {
            return "NO";
        }
        
        for (int i = 0; i < countArray.length; i++) {
            if (countArray[i] == 1) {
                return "NO";
            }
        }
        
        return "YES";
    }