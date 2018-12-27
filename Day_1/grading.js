function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            var multiple = (parseInt(grades[i] / 5) + 1) * 5;
            var diff = multiple - grades[i];
            if (diff < 3) {
                grades[i] = multiple;
            }
        }
    }
    return grades;
}