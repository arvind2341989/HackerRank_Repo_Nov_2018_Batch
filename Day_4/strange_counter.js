// Complete the strangeCounter function below.
function strangeCounter(t) {
    var strtValue = 3;
    var temp = 0;
    while (temp < t) {
        temp = temp + strtValue;
        strtValue = strtValue * 2;
    }
    strtValue = strtValue / 2;
    return temp - strtValue + (strtValue - t) + 1;
}