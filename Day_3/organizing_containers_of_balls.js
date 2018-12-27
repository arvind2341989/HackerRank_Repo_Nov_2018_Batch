// Complete the organizingContainers function below.
function organizingContainers(container) {
    var tContainer = new Array(container.length).fill(0);
    var tBall = new Array(container.length).fill(0);
    for (let i = 0; i < container.length; i++){
        for (let j = 0; j < container.length; j++){
            tContainer[i] += container[i][j];
            tBall[j] += container[i][j];
        }
    }
    tContainer.sort();
    tBall.sort();

    for (let i = 0; i < tContainer.length; i++){
        if (tContainer[i] != tBall[i]) return "Impossible";
    }
    return "Possible";
}