function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    
    for (var i = 0; i < grades.length; i++)
    {
        var g = grades[i] % 5;
        if (grades[i] < 38) {
            grades[i] = grades[i];
        } else if (g > 2) {
            grades[i] = grades[i] + (5 - (grades[i] % 5));
        }
        
    }
    return grades;
}