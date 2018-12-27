function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    for (var i = 0; i < grades.length; i++){
        var nextmul5 = grades[i] + (5 - (grades[i] % 5));
        if (grades[i] < 38) {
            grades[i] = grades[i];
        }
        else {
            if ((grades[i]%5) > 2) {
                grades[i] = nextmul5;             
            }
            else {
                grades[i] = grades[i];
            }
        }
    }
    return grades;

}

