function kangaroo(x1, v1, x2, v2) {
    var status = 0;
    if(x1==x2) {
        status++;
        return ("YES");
    }
    else {
        
        while (((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2))!=true) {
            x1 = x1 + v1;
            x2 = x2 + v2;    
            if (x1 == x2) {
                status++;
                return ("YES");
            }
        }
    }
    if (status == 0) {
        return ("NO");
    }

}