function gradingStudents(grades) {
   
    var index = 0;
    while (index < grades.length) {
        if (grades[index] % 5 >= 3 && grades[index] > 37) {
            grades[index] = grades[index] - grades[index] % 5 + 5;
        }

        ++index;
    }
    return grades;
    }    