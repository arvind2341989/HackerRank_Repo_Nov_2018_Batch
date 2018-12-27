function compareTriplets(a, b) {
    var alice = 0, bob = 0;
    for (var i = 0; i < a.length; i++) { 
        if (a[i] < b[i]) {
            bob += 1;
        } else if (a[i] > b[i]) {
            alice += 1; 
        } else { 
		}
    }
	
    var solution = [alice, bob];
    return solution;     

}