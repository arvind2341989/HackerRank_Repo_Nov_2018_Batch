function viralAdvertising(n) {
    var people = 2, like = Math.floor(5 / 2);
    for (var i = 2; i <= n; i++) { 
        like = Math.floor((like * 3) / 2);
        people = people + like;
    }
    return people;
}