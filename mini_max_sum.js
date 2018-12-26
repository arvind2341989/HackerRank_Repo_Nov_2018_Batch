function miniMaxSum(arr) {
    var min = 0, max = 0;
    for (var i = 0; i < arr.length; i++) { 
        for (var j = i; j < arr.length; j++) { 
            if (arr[i] > arr[j]) { 
                arr[i] = arr[j] + arr[i];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    for (i = 0; i < arr.length - 1; i++) { 
        min = min + arr[i];
    }
    for (i = 1; i < arr.length; i++) { 
        max = max + arr[i];
    }
    process.stdout.write(min + " " + max);
}