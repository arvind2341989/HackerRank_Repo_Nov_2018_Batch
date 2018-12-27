function sherlockAndAnagrams(s) {
    var list = [];
    var i, j, k, count = 0, num = 0;
    for (i = 0; i < s.length; i++) {
        for (j = i + 1; j <= s.length; j++) {
            var p = (s.substring(i, j)).split('');
            p.sort();
            var sortedString = '' + p;
            if (list.includes(sortedString)) {
                num = 0;
                for (var k = 0; k < list.length; k++) {
                    if (list[k] == sortedString) {
                        num++;
                    }
                }
                count += num;
            }
            list.push(sortedString);
        }
    }
    return count;
}