// Complete the squares function below.
function squares(a, b) {
    var count = 0;
    count = Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
    return count;

}