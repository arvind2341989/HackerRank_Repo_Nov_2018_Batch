var count = 1;
    for (var i = 0; i < s.length; i++) { 
        if (s[i] == s[i + 1]) {
            count++;
        }
        else { 
            if (count % 2 == 0) {
                s = s.substring(0, i - count + 1) + s.substring(i + 1);
                count = 1;
                i = -1;
            }
            else if (count != 1) {
                count = count - 1;
                s = s.substring(0, i - count + 1) + s.substring(i + 1);
                count = 1;
                i = -1;
            }
            else { 
                count = 1;
            }
        }
    }
    if (s) {
        return s;
    }
    else { 
        return "Empty String";
    }