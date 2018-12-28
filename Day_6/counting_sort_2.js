// Complete the countingSort function below.
function countingSort(arr) {
    let count = Array(100).fill(0);
    arr.forEach(item => { ++count[item]; });

    var sortArr = [];
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < count[i]; j++){
            sortArr.push(i);
        }
    }
    return sortArr;
}