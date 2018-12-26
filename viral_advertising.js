function viralAdvertising(n) {
    var totalLiked = 0;
    var sharingTo = 5;
    var numberLiked = 2;
    var i = 0;
    while (i < n) {
        numberLiked = Math.floor(sharingTo / 2);
        sharingTo = numberLiked * 3;
        totalLiked += numberLiked;
        i++;
    }
    return totalLiked;
}