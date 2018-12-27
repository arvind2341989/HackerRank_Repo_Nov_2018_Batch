function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var totalCount = 0;
    var splCount = 0;
    var upperCount = 0;
    var lowerCount = 0;
    var digitCount = 0;
    for (var i = 0; i < n; i++) {
        var s = password.charAt(i);
        if (s.match("[!@#$%^&*()--+]")) {
            splCount++;
        }
        if (s.match("[A-Z]")) {
            upperCount++;
        }
        if (s.match("[a-z]")) {
            lowerCount++;
        }
        if (s.match("[0-9]")) {
            digitCount++;
        }
    }
    if (splCount == 0) {
        totalCount++;
    }
    if (upperCount == 0) {
        totalCount++;
    }
    if (lowerCount == 0) {
        totalCount++;
    }
    if (digitCount == 0) {
        totalCount++;
    }
    if (totalCount + n < 6) {
        return 6 - n;
    }
    else {
        return totalCount;
    }
}