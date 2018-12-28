// Complete the insertionSort function below.
function insertionSort(arr) {
    var arrLen = arr.length;
    if (arrLen < 2) {
        return 0;
    }
    var middle = (arrLen + 1) / 2;
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arrLen);

    return insertionSort(left) + insertionSort(right) + merge(arr, left, right);
}

function merge(arr, left, right) {
    var i = 0, j = 0, count = 0;
    var leftLen = left.length;
    var rightLen = right.length;

    while (i < leftLen || j < rightLen) {
        if (i === leftLen) {
            arr[i + j] = right[j];
            j++;
        }
        else if (j === rightLen) {
            arr[i + j] = left[i];
            i++;
        }
        else if (left[i] <= right[j]) {
            arr[i + j] = left[i];
            i++;
        }
        else {
            arr[i + j] = right[j];
            count += leftLen - i;
            j++;
        }
    }
    return count;
}
