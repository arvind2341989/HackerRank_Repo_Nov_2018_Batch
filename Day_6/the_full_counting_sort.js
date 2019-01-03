// Complete the countSort function below.
function countSort(arr) {
    var resArr = new Array(100).fill("").map(() => new Array().fill(""));
    var half = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++)
        resArr[arr[i][0]].push(i < half ? "-" : arr[i][1]);

    var outputArr = [];
    for (let i = 0; i < 100; i++){
        for (let j = 0; j < resArr[i].length; j++)
            outputArr.push(resArr[i][j]);
    }
    console.log(outputArr.join(" "));
}