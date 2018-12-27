// Complete the pangrams function below.
function pangrams(s) {
    var str = s.toLowerCase().replace(/ +/g, "");
    var set = new Set();
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        set.add(str.charAt(i));
    }
    if (set.size == 26) {
        return "pangram";
    }
  else {
        return "not pangram";
    }
}