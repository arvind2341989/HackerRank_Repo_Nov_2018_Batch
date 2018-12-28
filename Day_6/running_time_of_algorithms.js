// Complete the runningTime function below.
function runningTime(arr) {
    var count = 0;
    for (let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j = i;
        while (j >= 1 && temp < arr[j-1]) {
            arr[j] = arr[j-1];
            j --;
            count++;
        }
        arr[j] = temp;
    }
	
    return count;
}