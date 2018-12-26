function theLoveLetterMystery(s) {
    var half = Math.floor(s.length / 2);
    var diff = 0
    for (let i = 0; i < half; i++) {
        diff += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1))
    }
    return diff;
}