function hackerlandRadioTransmitters(x, k) {

    x.sort(function (a, b) {
        return a - b;
    });
    var n = x.length;
    var numOfTransmitters = 0;
    var i = 0;
    while (i < n) {
        numOfTransmitters++;
        var loc = x[i] + k;
        while (i < n && x[i] <= loc) {
            i++;
        }
        loc = x[--i] + k;
        while (i < n && x[i] <= loc) {
            i++;
        }
    }
    return numOfTransmitters;

}