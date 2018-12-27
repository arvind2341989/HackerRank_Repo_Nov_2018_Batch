function bonAppetit(bill, k, b) {
    var act = 0;
    for (var i = 0; i < bill.length; i++) {
        if (k != i) {
            act += bill[i];
        }
    }
    act /= 2;
    var diff = b - act;
    if (diff == 0) {
        console.log("Bon Appetit");
    }
    else {
        console.log(diff);
    }

}
