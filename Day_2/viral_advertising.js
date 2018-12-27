function viralAdvertising(n) {
    var totalLiked = 0;
    var people = 5;
    for (let i = 0; i < n; i++) {
        const dayLiked = Math.floor(people / 2);
        const received = dayLiked * 3;
        totalLiked += dayLiked;
        people = received;
    }
    return totalLiked;
}
