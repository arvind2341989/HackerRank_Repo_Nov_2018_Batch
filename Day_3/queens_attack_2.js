function queensAttack(n, k, xx, yy, obstacles) {
    var totalCount = 0;
    for (var p = 0; p < obstacles.length; p++){
        obstacles[p] = '' + obstacles[p];
    }
    //top left
    var x = xx, y = yy;
    while (1){
        x = x + 1;
        y = y - 1;
        if ((x == n + 1 || y == 0) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("t l " + x + " < x " + y + " < y");
        totalCount++;
    }

    //top straight
    x = xx, y = yy;
    console.log(x + " " + y);
    while (1){
        x = x + 1;
        y = y;
        if ((x == n + 1) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("t s " + x + " < x " + y + " < y");
        totalCount++;
    }

    //top right
    x = xx, y = yy;
    while (1) {
        x = x + 1;
        y = y + 1;
        if ((x == n + 1 || y == n + 1) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("t r " + x + " < x " + y + " < y");
        totalCount++;
    }

    //middle left
    x = xx, y = yy;
    while (1) {
        x = x;
        y = y - 1;
        if ((y == 0) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("m l " + x + " < x " + y + " < y");
        totalCount++;
    }

    //middle right
    x = xx, y = yy;
    while (1) {
        x = x;
        y = y + 1;
        if ((y == n + 1) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("m r " + x + " < x " + y + " < y");
        totalCount++;
    }

    //bottom left
    x = xx, y = yy;
    while (1) {
        x = x - 1;
        y = y - 1;
        if ((x == 0 || y == 0) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("b l " + x + " < x " + y + " < y");
        totalCount++;
    }

    //bottom straight
    x = xx, y = yy;
    while (1) {
        x = x - 1;
        y = y;
        if ((x == 0) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("b s " + x + " < x " + y + " < y");
        totalCount++;
    }

    //bottom right
    x = xx, y = yy;
    while (1) {
        x = x - 1;
        y = y + 1;
        if ((x == 0 || y == n + 1) || (obstacles.indexOf([x, y] + '') != -1)) {
            break;
        }
        console.log("b r " + x + " < x " + y + " < y");
        totalCount++;
    }
    return totalCount;
}