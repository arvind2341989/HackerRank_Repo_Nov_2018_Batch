// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    var temp1, temp2;
    var count = 0;
    var dayNum = 0;
    for (let ct = i; ct <= j; ct++){
        dayNum = ct;
        temp2 = 0;
        while (dayNum > 0) {
            temp1 = dayNum % 10;
            dayNum = parseInt(dayNum / 10);
            temp2 = temp2 * 10 + temp1;
        }
        if ((ct - temp2) % k == 0) {
            count++;
        } 
        
    }
    return count;

}