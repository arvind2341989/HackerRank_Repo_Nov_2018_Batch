function designerPdfViewer(h, word) {
    var maxheight = 0;
    for (var i = 0; i < word.length; i++) { 
        var j = word.charCodeAt(i);
        j = j - 97;
        if (maxheight < h[j]) { 
            maxheight = h[j];
        }
    }
    return maxheight * word.length;

}