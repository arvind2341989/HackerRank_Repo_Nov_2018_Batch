function bonAppetit(bill, k, b) {
    var amount = 0;
    for (var i = 0; i < bill.length; i++) {
        if (i != k) {
            amount = amount + bill[i];
        }
    }
    amount = amount / 2;
    if (b == amount) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b-amount);
    }
}