function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++) { 
        if (grades[i] >= 38) { 
            if ((5 * (Math.floor((grades[i] / 5) + 1)) - grades[i]) < 3) { 
                grades[i] = 5 * Math.floor((grades[i] / 5) + 1);
            }
        }
    }
    return grades;
}