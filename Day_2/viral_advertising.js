// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    var shared = 5;
    var liked = parseInt(shared / 2);
    var sum = liked;
    for (let i = 2; i <= n; i++){
        shared = liked * 3;
        liked = parseInt(shared / 2);
        sum = sum + liked;
    }
    return sum;

}