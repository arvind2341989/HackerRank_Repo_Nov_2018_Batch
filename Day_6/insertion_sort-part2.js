function insertionSort2(n, arr) {
    var res;
    for (let i = 1; i < n; i++) {
        res = arr.splice(i, 1)[0];
        for (let j = i; j >= 0; j--) {
            if (res > arr[j - 1] || j === 0) {
                arr.splice(j, 0, res);
                break;
            }
        }
        console.log(arr.join(' '));
    }

}