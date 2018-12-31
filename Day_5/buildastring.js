
function calculate(string, costAdd, costCopy) {
    var costPerState = [];
    costPerState[string.length-1] = 0;
    biggestPerState = [];
    var biggest = 0;
    for (var i=0; i < string.length; i++) {
        var substring = string.substring(0, i+1);
        var remainder = string.substring(i+1);
        biggest = findBiggestSubstring(substring, remainder, biggest);        
        biggestPerState[i] = biggest;
    }
    for (var i=string.length-2; i >= 0; i--) {
        var minCost = costAdd + costPerState[i+1];
        for (var j=1; j <= biggestPerState[i]; j++) {
            var cost = costCopy + costPerState[i+j];
            minCost = Math.min(minCost, cost);
        }
        costPerState[i] = minCost;
    }
    return costAdd + costPerState[0];
}