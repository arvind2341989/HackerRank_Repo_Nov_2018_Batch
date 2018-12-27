function bonAppetit(bill, k, b) {
    var bill_actual=0, i;
    for (i = 0; i < bill.length; i++) {
        if (i != k) {
            bill_actual = bill_actual + bill[i];
        }
    }
    bill_actual = bill_actual / 2;
    if (bill_actual == b) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b - bill_actual);
    }
   

}