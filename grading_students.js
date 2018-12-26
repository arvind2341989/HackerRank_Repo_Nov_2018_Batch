function gradingStudents(grades) {
    for (var i = 0; i < grades.length; i++){
        var grade = grades[i];
        if (grade >= 38) {
            var mod = grade % 5;
            if (mod > 2) {
                grade = grade + (5 - mod); 
                grades[i] = grade;
            }
        }
    }
    return grades;
}