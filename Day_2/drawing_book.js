function pageCount(n, p) {
   
    var start = parseInt(p / 2);
    var total = parseInt(n / 2);

    var end = total - start;
    if (end < start) {
        return end;
    }
    else {
        return start;
    }

}