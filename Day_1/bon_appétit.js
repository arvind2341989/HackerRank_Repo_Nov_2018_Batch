function bonAppetit(bill, k, b) {
    var sum = 0;
    for (let i = 0; i < bill.length; i++){
        if (i != k) sum += bill[i];
    }
    var splitAmount = sum / 2;
    if (splitAmount != b) {
        console.log(Math.abs(b - splitAmount));
    }
    else {
        console.log("Bon Appetit");
    }

}