function timeConversion(s) {
    var len = s.length;
    var AMPM = s.slice(len - 2, len);
    s = s.slice(0, len - 2);
    if (AMPM == "PM") {
        if (s.slice(0, 2) != "12") {
            var num = parseInt(s.slice(0, 2));
            num = num + 12;
            var ms = s.slice(2, len - 2);
            s = num + ms;
        }
    }
    else {
        if (s.slice(0, 2) == "12") {
            var ms = s.slice(2, len - 2);
            s = "00" + ms;
        }
    }
    return s;
}