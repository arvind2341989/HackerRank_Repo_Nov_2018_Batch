// Complete the minimumDistances function below.

//we could use merge sort to sort values 
//  but while merging, we store the indices of each element
//  then compare adjacent indices
//  Optimized: O(NlogN) time

//BUT THIS IS EASY PROBLEM -> SO NO NEED 
//BRUTE FORCE FOR THE RESCUE!!!
function minimumDistances(a) {
    var len = a.length;
    var min = Number.MAX_VALUE;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (a[i] == a[j]) {
                var count = j - i;
                if (count < min) {
                    min = count;
                }
            }
        }
    }
    return (min == Number.MAX_VALUE) ? -1 : min;
}