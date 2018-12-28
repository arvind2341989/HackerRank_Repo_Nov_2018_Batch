// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    var isEntered = false;

    let temp = arr[arr.length - 1];
    for (let i = n-2; i >=0; i--){
        if (arr[i] > temp) {
            arr[i + 1] = arr[i];
        }
        else {
            arr[i + 1] = temp;
            isEntered = true;
            break;
        }
        console.log(arr.join(' '));
    }
    if (!isEntered) arr[0] = temp;

    console.log(arr.join(' '));
}