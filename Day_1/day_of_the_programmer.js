function dayOfProgrammer(year) {
    var sum = 215;
    var feb = 0;
    if (year >= 1700 && year <= 1917) {
        if (year % 4 == 0) {
            feb = 29;
        }
        else {
            feb = 28;
        }
    }
    else if (year == 1918) {
        feb = 15;
    }
    else {

        if (year % 400 == 0) {
            feb = 29;
        }
        else if (year % 4 == 0 && year % 100 != 0) {
            feb = 29;
        }
        else {
            feb = 28;
        }
    }
    sum += feb;
    var day = 256 - sum;
    var res = day + ".09." + year;
    return res;
}