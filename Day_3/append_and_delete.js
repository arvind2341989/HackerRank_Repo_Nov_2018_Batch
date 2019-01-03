function appendAndDelete(s, t, k) {
    var ar = s.split('');
    var ar1 = t.split('');
    var l = ar.length;
    var l1 = ar1.length;
    var count = 0;
    var max = 0;
    if (ar.length > ar1.length) {
        max = ar.length;
    }
    else {
        max = ar1.length;
    }

    for (var i = 0; i < max; i++) {
        if (ar[i] != ar1[i]) {

            count = i;
            break;

        }
    }
    count = ar.length - count;
    if (l1 > l) {
        if (l1 + l)
            return "No";
    }

    else {
        if (count < k) {
            return "Yes";
        }
        else if (l - count - k < k) {
            return "No";
        }
        else {
            return "No";
        }
    }