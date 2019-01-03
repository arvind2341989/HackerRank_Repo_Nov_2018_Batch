function arrayManipulation(n, queries) {
    var arr = [];
    var max = 0;
    for (let l = 0; l < n; l++) {
        arr[l] = 0;
    }
    for (let i = 0; i < queries.length; i++) {

        arr[queries[i][0] - 1] += queries[i][2];
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] -= queries[i][2];
        }
    }
    for (let j = 1; j < n; j++) {
        arr[j] += arr[j - 1];
    }
    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }

    return max;
}