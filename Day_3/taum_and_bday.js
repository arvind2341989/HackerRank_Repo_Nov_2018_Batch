function taumBday(b, w, bc, wc, z) {
    var temp = addStr('' +z, '' + wc);
    var temp2 = addStr('' + z, '' + bc);
    var blackCost = Math.min(multStr('' + b, '' + bc), multStr('' + b, '' + temp));
    var whiteCost = Math.min(multStr('' + w, '' + wc), multStr('' + w, '' + temp2));
    return blackCost + whiteCost;
}

function addStr(a, b) {
    var temp;
    var carryover = 0;
    var res = "";
    var i, max;

    if (b.length > a.length) {
        temp = a;
        a = b;
        b = temp;
    }
    a = reverse(a);
    b = reverse(b);
    for (i = 0, max = b.length; i < max; i++) {
        var resTmp = parseInt(a[i]) + parseInt(b[i]) + carryover;
        res += (resTmp % 10).toString();
        carryover = (resTmp - (resTmp % 10)) / 10;
    }
    for (i = b.length, max = a.length; i < max; i++) {
        resTmp = parseInt(a[i]) + carryover;
        res += (resTmp % 10).toString();
        carryover = (resTmp - resTmp % 10) / 10;
    }
    if (carryover) {
        res += carryover.toString();
    }
    return reverse(res);
}

function multStr(a, b) {
    var smallRes;
    var res = [];
    var tmp, carryover;
    var i, j, nbOfZero;
    if (a === "0" || b === "0") {
        return "0";
    }
    for (i = b.length - 1; i >= 0; i--) {
        if (b[i] === '0') {
            continue;
        }
        smallRes = "";
        for (nbOfZero = b.length - 1 - i; nbOfZero > 0; nbOfZero--) {
            smallRes += "0";
        }
        carryover = 0;
        for (j = a.length - 1; j >= 0; j--) {
            tmp = parseInt(a[j]) * parseInt(b[i]) + carryover;
            smallRes = (tmp % 10).toString() + smallRes;
            carryover = (tmp - tmp % 10) / 10;
        }
        if (carryover) {
            smallRes = carryover.toString() + smallRes;
        }
        res.push(smallRes);
    }
    return res.reduce(function (a, b) {
        return addStr(a, b);
    });
}