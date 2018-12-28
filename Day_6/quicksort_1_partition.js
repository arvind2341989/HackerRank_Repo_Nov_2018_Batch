// Complete the quickSort function below.
function quickSort(arr) {
    var temp = 0;
    var pivot = arr[0];
    var pIndex = arr.length - 1;
    for (let i = arr.length; i >= 1; i--){
        if (arr[i] >= pivot) {
            temp = arr[i];
            arr[i] = arr[pIndex];
            arr[pIndex] = temp;
            pIndex--;
        }
    }
	
    temp = arr[pIndex];
    arr[pIndex] = arr[0];
    arr[0] = temp;

    return arr;
}