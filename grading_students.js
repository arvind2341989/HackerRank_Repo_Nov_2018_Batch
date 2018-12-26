function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    var result=[];
    for (var i = 0; i < grades.length; i++) {

        var temp = grades[i] + (5 - (grades[i] % 5));
        if (temp - grades[i] < 3) {

            if (temp >= 40) {
                result.push(temp);
            }
            else {
                result.push(grades[i]);
            }
        }

        else {
            result.push(grades[i]);
        }
    }



    return result;

}