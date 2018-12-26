function pageCount(n, p) {
    /*
     * Write your code here.
     */
    var leftStart = Math.floor(p / 2),
        rightStart = Math.floor(n / 2) - leftStart;
    return leftStart > rightStart ? rightStart : leftStart;
}