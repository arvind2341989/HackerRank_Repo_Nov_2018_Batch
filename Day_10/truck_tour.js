/*
 * Complete the truckTour function below.
 */
function truckTour(petrolpumps) {
    var currentGas = 0;
    var startingPoint = 0;
    for (let i = 0; i < petrolpumps.length; i++){
        currentGas += petrolpumps[i][0];
        if (currentGas < petrolpumps[i][1]) {
            currentGas = 0;
            startingPoint = i + 1;
        }
        else currentGas -= petrolpumps[i][1];
    }
    return startingPoint;
}