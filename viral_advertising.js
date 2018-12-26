function viralAdvertising(n) {
    var shared = 5, liked = 2, cumulative = 2;
    for (var i = 1; i < n; i++) {
        shared = liked * 3;
        liked = (Math.floor(shared / 2));
        cumulative = cumulative + liked;
    }
    return cumulative;

}