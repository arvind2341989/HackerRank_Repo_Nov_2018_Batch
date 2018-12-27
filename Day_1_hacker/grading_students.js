function gradingStudents(grades) {
    for (let i = 0; i < grades.length; i++){
        if (grades[i] < 38) continue;
        else {
            var counter = grades[i] % 5;
            var newGrade = grades[i] + 5 - counter;
            if (newGrade - grades[i] < 3) grades[i] = newGrade;
            else continue;
        }
    }
    return grades;
}