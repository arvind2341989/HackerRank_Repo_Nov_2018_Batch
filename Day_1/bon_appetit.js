function bonAppetit(bill, k, b) {
    var sum = 0;  
    for (let i = 0; i < bill.length; i++) {
        if (i != k) {
            
            sum += bill[i];
        }
    }
    if (b == (sum / 2)) {
        console.log("Bon Appetit");
    } else {
        console.log(b - (sum / 2));
    }
}