function appendAndDelete(s, t, k) {
    for (var i = 0; i < Math.max(s.length,t.length); i++) {
        if (s[i] != t[i]) { 
            break;
        }
    }
    var sum = s.length - i;
    sum += t.length - i;
    k = k - sum;
    if (k >= 0) {
        return "Yes";
    }
    else {
        return "No";
    }
}