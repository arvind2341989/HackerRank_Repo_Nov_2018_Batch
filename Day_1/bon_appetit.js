function bonAppetit(bill, k, b) {
    var sum = 0;
    for (var i = 0; i < bill.length; i++) {
        sum = sum + bill[i];
    }
    sum = sum - bill[k];
    sum = sum / 2;
    if (b - sum) {
        console.log(b - sum);
    }
    else {
        console.log("Bon Appetit");
    }

}