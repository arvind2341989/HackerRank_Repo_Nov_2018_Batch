function squares(a, b) {
    var count = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
    return count;
}