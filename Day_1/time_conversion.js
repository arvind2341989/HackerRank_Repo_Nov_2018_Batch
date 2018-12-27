function timeConversion(s) {
    var c = s.charAt(8);
    if (c == 'A' || c == 'a') {
        if (parseInt(s.substring(0,2)) < 12) { 
            return s.substring(0, 8);
        }
        else {
            return "00" + s.substring(2, 8);
         }
    }
    else if (c == 'P' || c == 'p') { 
        var l = s.substring(0, 2);
        if (parseInt(l) < 12) {
            l = parseInt(l) + 12;
            return l + s.substring(2, 8);
        }
        else { 
            return s.substring(0, 8);
        }
    }
}