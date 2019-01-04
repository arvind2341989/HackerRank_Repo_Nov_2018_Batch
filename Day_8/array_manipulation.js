function arrayManipulation(n, queries) {
    var arr = [];
    var max = 0;
    for (let i = 0; i < n; i++) {
        arr[i] = 0;
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
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}