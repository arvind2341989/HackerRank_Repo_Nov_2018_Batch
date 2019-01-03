// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
    var resultArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === m) {
                resultArr.push(i + 1);
                resultArr.push(j + 1);
            }
        }
    }
    return resultArr;
}