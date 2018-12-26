function libraryFine(d1, m1, y1, d2, m2, y2) {
    var hackos = 0;
    if (y2 < y1) {
       hackos = (y1 - y2) * 10000;
    }
    if (m2 < m1 && y2 == y1) {
        hackos = (m1 - m2) * 500;
    }
    if (d2 < d1 && m2 == m1 && y1 == y2) { 
        hackos = (d1 - d2) * 15;
    }
    return hackos;
}