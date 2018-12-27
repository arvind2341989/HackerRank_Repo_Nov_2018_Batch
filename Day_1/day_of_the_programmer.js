function dayOfProgrammer(year) {
    if (year == 1918) {
        return "26.09.1918";
    }
    //check if leap year or not
    var isLeapYear = true;
    if (year % 4 != 0) {
        isLeapYear = false;
    }
    if (year > 1918 && year % 100 == 0 && year % 400 != 0) {
        isLeapYear = false;
    }

    if (isLeapYear) {
        return "12.09." + year;
    }
    else {
        return "13.09." + year;
    } 
}