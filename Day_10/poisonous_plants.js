// Complete the poisonousPlants function below.
function poisonousPlants(p) {
    var maxDaysAlive = 0;
    var plantStack = [];
    for (let i = 0; i < p.length; i++){
        var daysAlive = 0;
        while (plantStack.length > 0 && p[i] <= plantStack[plantStack.length - 1].plant)
            daysAlive = Math.max(daysAlive, plantStack.pop().days);
        if (plantStack.length === 0) daysAlive = 0;
        else daysAlive += 1;
        maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
        plantStack.push({
            plant: p[i],
            days: daysAlive
        });
    }
    return maxDaysAlive;
}