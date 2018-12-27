function gradingStudents(grades) {
    var k=0, x=0;
    for (let i = 0; i < grades.length; i++) { 
        if (grades[i] >= 38) {
            k = grades[i] % 5;
            x = 5 - k;
            if (x < 3) {
                grades[i] = grades[i] + x;
            }
            else { 
                grades[i] = grades[i];
            }
        }
        else { 
            grades[i] = grades[i];
        }
        
    }
    return grades;

}