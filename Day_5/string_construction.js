function stringConstruction(s) {
    var set = new Set();
    var cost = 0;
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s.charAt(i))) {
            set.add(s.charAt(i));
            cost++;
        }
    }
    return cost;
}