function dayOfProgrammer(year) {
    var date = "";
    if (year == 1918) {
        date = "26.09.1918";
    }
    else if (((year < 1918) && (year % 4 == 0)) || ((year > 1918) && ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))))) {
        
        date = "12.09." + year;
        console.log(date);
    }
    else {
        date = "13.09." + year;
        console.log(date);
    }
    return date;
}