function timeInWords(h, m) {
    var currentTime;
    var time = ["zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"];

    if (m == 0) {
        currentTime = time[h] + " o' clock";
    }
    else if (m == 15) {
        currentTime = "quarter past " + time[h];
    }
    else if (m == 30) {
        currentTime = "half past " + time[h];
    }
    else if (m == 45) {
        currentTime = "quarter to " + time[h + 1];
    }
    else if (m < 30) {
        currentTime = time[m] + " minute" + (m <= 1 ? "" : "s") + " past " + time[h];
    }
    else {
        currentTime = time[60 - m] + " minutes" + " to " + time[h + 1];
    }
    return currentTime;

}
