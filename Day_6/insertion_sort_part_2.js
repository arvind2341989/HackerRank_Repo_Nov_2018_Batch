// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++){
        let temp = arr[i];
        let j = i - 1;		
        while (j >= 0 && temp < arr[j]) {
            arr[j + 1] = arr[j];
            j -= 1;
        }		
        arr[j + 1] = temp;
        console.log(arr.join(' '));
    }
}