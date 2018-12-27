function countingValleys(n, s) {
    var prev_level = 0, sea_level = 0, current_level = 0, valleys = 0 ;
    for (let i = 0; i < s.length; i++) {
        prev_level = current_level;
        if (s[i] === 'U') {
            current_level++;
            
        } else { 
            current_level--;
            if (prev_level == sea_level) {
                valleys++;
            }
            
        }
    }
    return valleys;
}