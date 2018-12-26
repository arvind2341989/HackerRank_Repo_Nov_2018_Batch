function appendAndDelete(s, t, k) {
    var sArray = s.split('');
    var tArray = t.split('');
    var sLen = s.length;
    var tLen = t.length;
    var i = 0;
    while (i < sLen && i < tLen && sArray[i] == tArray[i]) {
        i++;
    }
    var howManyToEdit = (sLen - i) + (tLen - i);
    if (k >= howManyToEdit && (k - howManyToEdit) % 2 == 0 || k > sLen + tLen) {
        return "Yes";
    }
    else {
        return "No";
    }
}