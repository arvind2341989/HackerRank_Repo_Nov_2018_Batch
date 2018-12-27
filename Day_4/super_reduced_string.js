// Complete the superReducedString function below.
function superReducedString(s) {
    var s1 = s.split("");
    var counter = 1;
    while (counter != 0) {
        counter = 0;
        for (let i = 0; i < s1.length - 1; ++i) {
            if (s1[i] == s1[i + 1]) {
                s1.splice(i, 2);
                i -= 1;
                counter = 1;
            }
        }
    }
    var s2 = s1.join("");
    if (s2.length == 0) return "Empty String";
    else return s2;
}