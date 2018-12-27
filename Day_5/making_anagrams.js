function makingAnagrams(s1, s2) {
    var totalDeletions = 0;
    if (s1.length >= s2.length) {
        var s1List = [];
        for (var i = 0; i < s1.length; i++) {
            s1List.push(s1.charAt(i));
        }
        var count = 0;
        var s2Array = s2.split('');
        for (var i = 0; i < s2Array.length; i++) {
            if (s1List.includes(s2Array[i])) {
                s1List.splice(s1List.indexOf(s2Array[i]), 1);
                count++;
            }
        }
        totalDeletions = (s2Array.length - count) + s1List.length;
    }
    else {
        var s2List = [];
        for (var i = 0; i < s2.length; i++) {
            s2List.push(s2.charAt(i));
        }
        var count = 0;
        var s1Array = s1.split('');
        for (var i = 0; i < s1Array.length; i++) {
            if (s2List.includes(s1Array[i])) {
                s2List.splice(s2List.indexOf(s1Array[i]), 1);
                count++;
            }
        }
        totalDeletions = (s1Array.length - count) + s2List.length;
    }
    return totalDeletions;

}