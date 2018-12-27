function gradingStudents(grades) {
    var i;
    for (i = 0; i < grades.length; i++) {
        if (grades[i] < 37) {
            grades[i] = grades[i];
        }
        else if (grades[i] > 37 && grades[i] <= 40) {
            grades[i] = 40;
        }
        else if ((grades[i] + 2) % 5 == 0) {
            grades[i] += 2;
        }
        else if ((grades[i] + 1) % 5 == 0) {
            grades[i] += 1;
        }
    }
    return grades;
}
