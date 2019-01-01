// Complete the gemstones function below.
function gemstones(arr) {
    var countGem = 0;
    for (let i = 97; i <= 122; i++){
        let flag = true;
        for (let j = 0; j < arr.length; j++){
            if (!arr[j].includes(String.fromCharCode(i)))
                flag = false;
        }
        if (flag) countGem++;
    }
    return countGem;
}