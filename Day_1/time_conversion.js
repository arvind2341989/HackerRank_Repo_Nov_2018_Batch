 function timeConversion(s) {
        var s1 = s.split(':');
        var amPm = s1[s1.length - 1].substring(2);
        if (amPm == "PM") {
            s1[0] %= 12;
            s1[0] += 12;
        }
        else if (amPm == "AM") {
            if (s1[0] == 12) {
                s1[0] = "00";
            }
        }

        s1[2] = s1[2].substring(0, 2);

        var finalString = s1[0] + ":" + s1[1] + ":" + s1[2];

        return finalString;
    }