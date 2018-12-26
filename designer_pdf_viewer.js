function designerPdfViewer(h, word) {
    var max = 0;
    for (var v = 0; v < word.length; v++) {
        if (max < h[(word.charCodeAt(v) - 97)]) {
            max = h[word.charCodeAt(v) - 97];
        }
    }
    return max * word.length;

}