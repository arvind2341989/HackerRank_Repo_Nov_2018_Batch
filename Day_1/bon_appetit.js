function bonAppetit(bill, k, b) {
    var sum = 0;
    for (var i = 0; i < bill.length; i++){
        sum = sum + bill[i];
    }
    var a = sum-bill[k];
    var c = a / 2;
    if (b == c) {
        console.log("Bon Appetit");
    } else {
        console.log(bill[k] / 2);
    }
}