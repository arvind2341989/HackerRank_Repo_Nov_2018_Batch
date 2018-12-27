function strangeCounter(t) {
    var rem = 4;
    while (rem <= t) {
        rem = rem * 2 + 2;
    }
    return (rem - t);


}