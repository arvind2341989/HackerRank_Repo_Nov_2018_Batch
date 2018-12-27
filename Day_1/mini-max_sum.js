function miniMaxSum(arr) {
    var x = 0, max, min, temp_sum;
    for (let j = 1; j <= 5; j++) {
        temp_sum = 0;
        for (let i = 0; i < arr.length; i++) {

            if (i != x) {
                temp_sum += arr[i];
            }
            else {
                continue;
            }
        }
        x++;
        if (j == 1) {
            max = temp_sum;
            min = temp_sum;
        }
        else {
            if (temp_sum > max) {
                max = temp_sum;
            }
            if (temp_sum < min) {
                min = temp_sum;
            }
        }
	}
    console.log(min + " " + max);
}