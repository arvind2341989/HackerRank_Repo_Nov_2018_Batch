function appendAndDelete(s, t, k) {

    var result = "";

    if (k >= (s.length + t.length)) {
        result = "Yes";
    } else {
        var deviates = -1;
        var i = 0;

        while (i < s.length && i < t.length) {
            if (s.charAt(i) != t.charAt(i)) {
                deviates = i;
                break;
            }
            i++;
        }

        if (deviates == -1) {
            deviates = Math.min(s.length, t.length);
        }

        var numDeletions = (s.length - deviates);
        var numAdditions = (t.length - deviates);

        k = k - numDeletions;

        if (k >= numAdditions && ((k % 2) == (numAdditions % 2))) {
            result = "Yes";
        } else {
            result = "No";
        }
    }
    return result;
}