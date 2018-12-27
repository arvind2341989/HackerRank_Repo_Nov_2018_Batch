function timeInWords(h, m) {
    var result = "";
    if (m == 0) {
        result = numToString(h) + " o' clock";
    }
    else if (m <= 30) {
        //past
        if (m == 1) {
            result = numToString(m) + " minute past " + numToString(h);
        }
        else {
            var minuteString = numToString(m);
            if (minuteString == "fifteen") {
                minuteString = "quarter past ";
            }
            else if (minuteString == "thirty") {
                minuteString = "half past ";
            }
            else {
                minuteString += " minutes past ";
            }
            result = minuteString + numToString(h);
        }
    }
    else {
        //to
        m = 60 - m;
        if (m == 1) {
            result = numToString(m) + " minute to " + numToString(h + 1);
        }
        else {
            var minuteString = numToString(m);
            if (minuteString == "fifteen") {
                minuteString = "quarter to ";
            }
            else {
                minuteString += " minutes to ";
            }
            result = minuteString + numToString(h + 1);
        }
    }
    return result;
}
    
function numToString(num){
    // 1 to 59
    var numOfDigits = 0;
    var temp = num;
    var sb = "";
    while (temp > 0) {
        sb += "" + parseInt(temp % 10);
        temp = parseInt(temp / 10);
        numOfDigits++;
    }
    var number = sb.split("").reverse().join("");
    if (number.length == 1) {
        return singleDigit(number);
    }
    else {
        var first = "" + number.charAt(0);
        if (first == "1") {
            return doubleDigit(number);
        }
        else {
            var second = "" + number.charAt(1);
            if (second != "0") {
                return doubleDigit(first) + " " + singleDigit(second);
            }
            else {
                return doubleDigit(first);
            }
        }
    }
}
    
function doubleDigit(str){
    var s = "" + str.charAt(0);
    if (s != "1") {
        switch (s) {
            case "2": return "twenty";
            case "3": return "thirty";
            case "4": return "fourty";
            case "5": return "fifty";
            case "6": return "sixty";
            case "7": return "seventy";
            case "8": return "eightty";
            case "9": return "ninety";
            default: return "error";
        }
    }
    else {
        switch (str) {
            case "10": return "ten";
            case "11": return "eleven";
            case "12": return "twelve";
            case "13": return "thirteen";
            case "14": return "fourteen";
            case "15": return "fifteen";
            case "16": return "sixteen";
            case "17": return "seventeen";
            case "18": return "eighteen";
            case "19": return "nineteen";
            default: return "error";
        }
    }
}
    
function singleDigit(s){
    switch (s) {
        case "1": return "one";
        case "2": return "two";
        case "3": return "three";
        case "4": return "four";
        case "5": return "five";
        case "6": return "six";
        case "7": return "seven";
        case "8": return "eight";
        case "9": return "nine";
        default: return "error";
    }
}