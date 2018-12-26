function bonAppetit(bill, k, b) {
    var sum = 0;
    for (var i = 0; i < bill.length; i++){
        if (i == k) {
            continue;
        }
        sum += bill[i];
    }
    var equalShare = sum / 2;
    if (equalShare == b) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b - equalShare);
    }
}