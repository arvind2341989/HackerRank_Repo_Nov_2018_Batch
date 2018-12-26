function designerPdfViewer(h, word) {
    var max = 0;
    for (let i = 0; i < h.length; i++){
        if ((h[word.charCodeAt(i) - 97]) > max) 
            max = h[word.charCodeAt(i) - 97];  
    }
    return max * word.length;

}