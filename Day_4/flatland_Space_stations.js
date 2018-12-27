// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    var dist = [];
    for (let i = 0; i < n; i++){
        let tempDist = 10000000;
        for (let j = 0; j < c.length; j++){
            if (Math.abs(c[j] - i) < tempDist) tempDist = Math.abs(c[j] - i);
        }
        dist[i] = tempDist;
    }
    dist.sort(function (a, b) { return b - a; });
    return dist[0];

}