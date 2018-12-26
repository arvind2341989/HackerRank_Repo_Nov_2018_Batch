function bonAppetit(bill, k, b) {
    var a,j = 0;
    for (var i = 0; i < bill.length; i++){
        j+= bill[i];
    }
    a=j - bill[k];
    if (b > a/2) {
        console.log(b - a/2);
    }
    else if (b==a/2){
        console.log("Bon Appetit");
    }
}