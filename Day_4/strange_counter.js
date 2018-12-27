function strangeCounter(t) {
    var remainder = 4;
    while (remainder <= t) {
        remainder *= 2;
		remainder += 2;
    }
    return (remainder - t);
}