function dayOfProgrammer(year) {
    var sumofeight = 243;
    if (year < 1918) {
        if (year % 4 == 0) {
            sumofeight += 1;
        }
    } else if (year == 1918) {
        sumofeight -= 13;
    } else {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            sumofeight += 1;
        }
    }
    return (256 - sumofeight) + ".09." + year;

}
