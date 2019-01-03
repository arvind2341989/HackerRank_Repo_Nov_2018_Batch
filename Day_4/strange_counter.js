function strangeCounter(t) {
    var time = 3;
    var tempTime = 3;
    while (t > time) {
        tempTime = 2 * tempTime;
        time = time + tempTime;
    }
    return time - t + 1;

}