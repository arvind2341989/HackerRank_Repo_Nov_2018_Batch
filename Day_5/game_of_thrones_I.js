// Complete the gameOfThrones function below.
function gameOfThrones(s) {
    var counter = 0;
    var arr = s.split('');
    var map = new Map();

    for (let i in arr) {
        if (map.get(arr[i]) == null)
            map.set(arr[i], 1)
        else
            map.set(arr[i], map.get(arr[i]) + 1);
    }

    var values = map.values();

    for (let value of values) {
        if (value % 2 != 0)
            counter++;
    }

    if (counter > 1) return "NO";
    else return "YES";
}