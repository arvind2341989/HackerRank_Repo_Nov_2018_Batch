// Complete the workbook function below.
function workbook(n, k, arr) {
    var currPage = -1;
    var countSpecial = 0;
    for (let i = 0; i < n; i++){
        for (let j = 0; j < arr[i] ; j += k){
            currPage++;
            if (j <= currPage && currPage < Math.min(j + k, arr[i])) {
                countSpecial++;
            }
        }
    }
    return countSpecial;
}