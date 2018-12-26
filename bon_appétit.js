function bonAppetit(bill, k, b) {
    var actual = 0;
    for (var i = 0; i < bill.length; i++) { 
        if (k != i) { 
            actual += bill[i];
        }
    }
    actual /= 2;
    var diff = b - actual;
    if (diff == 0) {
        console.log("Bon Appetit");
    }
    else { 
        console.log(diff);
    }

}
