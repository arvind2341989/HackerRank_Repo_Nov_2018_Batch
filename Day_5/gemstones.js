function gemstones(arr) {
    var count = 0;
    for (let i = 97; i <= 122; i++) {
        var hasChar = true;
        for (var j = 0; j < arr.length; j++) {
            if (!arr[j].includes(String.fromCharCode(i))) {
                hasChar = false;
            }
        }
        if (hasChar) {
            count++;
        }
    }
    return count;
}