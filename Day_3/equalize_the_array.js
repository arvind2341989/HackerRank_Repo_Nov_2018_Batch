// Complete the equalizeArray function below.
function equalizeArray(arr) {
    var count = [];
    var countFlag = 0;
    var counter = 1;
    arr.sort(function (a, b) { return a - b; });

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] != arr[i + 1]) {
            count[countFlag] = counter;
            countFlag++;
        }
        else {
            while (arr[i] == arr[i + 1]) {
                counter++;
                i++;
            }
            count[countFlag] = counter;
            countFlag++;
        }
        counter = 1;
    }
    count.sort(function (a, b) { return b - a; });
    return (arr.length - count[0]);
}