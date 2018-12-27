function gradingStudents(grades) {

    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            var multileFive = (parseInt(grades[i] / 5) + 1) * 5;
            var diff = multileFive - grades[i];
            if (diff < 3) {
                grades[i] = multileFive;
            }
        }
    }
    return grades;

}