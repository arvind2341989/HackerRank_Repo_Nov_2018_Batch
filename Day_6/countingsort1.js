function countingSort(arr) {
   
    let result = [];
    for (let index = 0; index < 100; index++) {
        result[index] = 0;
    }

    for (let index = 0; index < arr.length; index++) {
        result[arr[index]] = result[arr[index]] + 1;
    }

    return result;
}