function largestRectangle(h) {
    let max = 0;
    for (let i = 0; i < h.length; i++) {
        let goodPerimeter = 1;
        for (let x = (i + 1); x < h.length; x++) {
            if (h[i] <= h[x]) {
                goodPerimeter++;
            }
            else {
                break;
            }
        }
        for (let y = (i - 1); y >= 0; y--) {
            if (h[i] <= h[y]) {
                goodPerimeter++;
            }
            else {
                break;
            }
        }
        if (h[i] * goodPerimeter > max) {
            max = h[i] * goodPerimeter;
        }
    }
    return max;
}