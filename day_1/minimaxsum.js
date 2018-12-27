function miniMaxSum(arr) {
            var sum = 0;
            for (var j = 0; j < arr.length; j++) {
                sum = sum + arr[j];
            }
            var array = arr.sort();
            var max = sum - arr[0];
            var min = sum - arr[arr.length - 1];
            console.log(min + " " + max);
        }