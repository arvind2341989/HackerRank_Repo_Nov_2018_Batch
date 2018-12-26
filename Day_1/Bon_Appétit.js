function bonAppetit(bill, k, b) {
    var sum = 0;
    var len = bill.length;
    for (var i in bill) {
        sum += bill[i];
    }
    var total_bill = sum ;
   
    var bill_paid = (total_bill - bill[k]) / 2;
    

        if ( bill_paid == b ) {
            console.log("Bon Appetit");
        }
        else {
            console.log(b-bill_paid);
        }
   


}\