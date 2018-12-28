function arrayManipulation(n, queries) {
    let arr = [];
    for(let i=0; i<n; i++){
        arr[i] = 0;
    }
    for(let i =0; i<queries.length; i++){
        arr[queries[i][0]-1] += queries[i][2];
        if (queries[i][1] < arr.length) {
           arr[queries[i][1]] -= queries[i][2];
        }
    }
    for (let j = 1; j < n; j++) {
        arr[j] += arr[j-1];
    }
    let max=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=max){
            max = arr[i];
        }
    }
    return max; 
}