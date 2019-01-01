// Complete the stringConstruction function below.
function stringConstruction(s) {
    var set = new Set();
    s.split('').forEach((item) => { set.add(item); });
    
    return set.size;
}