function designerPdfViewer(h, word) {
    var i = 0, max = 0;
    for (i = 0; i < h.length; i++) {
        if (h[word.charCodeAt(i) - 97] > max) {
            max = h[word.charCodeAt(i) - 97];
        }
    }
    return max * (word.length);
}