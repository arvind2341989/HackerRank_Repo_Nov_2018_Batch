function viralAdvertising(n) {
    var shared = 5;
    var liked = parseInt(shared / 2);
    var sum = liked;
    for (let i = 2; i <= n; i++) { 
        shared = 3 * liked;
        liked = parseInt(shared / 2);
        sum += liked;
    }
    return sum;
}