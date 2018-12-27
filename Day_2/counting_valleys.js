function countingValleys(n, s) {
    var count = 0, count1 = 0;
    for (var i = 0; i < s.length; i++){
        if (s.charAt(i) == "U") {
            count++;
            if (count == 0) {
                count1++;
            }
        } else {
            count--;
        }
    }
    return count1;

}