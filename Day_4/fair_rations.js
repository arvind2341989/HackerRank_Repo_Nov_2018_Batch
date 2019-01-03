function fairRations(B) {
    var sum = 0;
    for (var i = 0; i < B.length; i++) {
        sum += B[i];
    }
    var count = 0;
    if (sum % 2 == 1) {
        return "NO";
    }
    else {
        for (var i = 0; i < B.length; i++) {
            if (B[i] % 2 != 0) {
                B[i] = B[i] + 1;
                B[i + 1] = B[i + 1] + 1;
                count += 2;
            }
        }
        return count;

    }
}