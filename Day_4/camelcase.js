function camelcase(s) {
    var count = 1;
    for (var i = 0; i < s.length; i++) {
        var x = s.charAt(i);
        if (x == x.toUpperCase()) {
            count++;
        }
    }
    return count;

}