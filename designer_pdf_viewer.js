function designerPdfViewer(h, word) {
    var max = Number.MIN_VALUE;
    for (var i = 0; i < word.length; i++) {
        var position = word.charCodeAt(i) - 97;
        if (h[position] > max) {
            max = h[position];
        }
    }
    return max * word.length;
}