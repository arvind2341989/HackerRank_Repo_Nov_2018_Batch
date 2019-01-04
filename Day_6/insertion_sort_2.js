function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        var temp = arr.splice(i, 1)[0];
        for (let j = i; j >= 0; j--) {
            if (temp > arr[j - 1] || j === 0) {
                arr.splice(j, 0, temp);
                break;
            }
        }
        console.log(arr.join(' '));
    }
}