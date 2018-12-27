function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
   
   
        var  max =  0, i;
        var  ans;
        for  (i =  0; i < keyboards.length; i++) {
            for  (var  j =  0; j < drives.length; j++) {
                ans = keyboards[i] + drives[j]
                if  (ans <= b) {
                    if  (ans > max)
                        max = ans;

                }
            }
        }
        if  (max >  0)
            return  max;


        else
            return  -1;
    } 