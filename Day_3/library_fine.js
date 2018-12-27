function libraryFine(d1, m1, y1, d2, m2, y2) {
        var fine = 0;
        if (y1 - y2 > 0)
            fine = (y1 - y2) * 10000;
        else if (y1 - y2 == 0)
            if (m1 - m2 > 0)
                fine = (m1 - m2) * 500;
            else if (m1 - m2 == 0)
                if (d1 - d2 > 0)
                    fine = (d1 - d2) * 15;
                else
                    fine = 0;
            else
                fine = 0;
        else
            fine = 0;
        return fine;
}
