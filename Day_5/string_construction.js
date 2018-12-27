
function stringConstruction(s) {
    var mySet = new Set();
    var cost = 0;
    for (let i = 0; i < s.length; i++) {
        if (!mySet.has(s.charAt(i))) {
            mySet.add(s.charAt(i));
            cost++;
        }
    }
    return cost;

}