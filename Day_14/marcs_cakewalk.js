// Complete the marcsCakewalk function below.
function marcsCakewalk(calorie) {
    calorie.sort((a, b) => { return b - a; });
    let dist = 0;
    for (let i = 0; i < calorie.length; i++){
        dist += (Math.pow(2,i) * calorie[i]);
    }
    return dist;
}