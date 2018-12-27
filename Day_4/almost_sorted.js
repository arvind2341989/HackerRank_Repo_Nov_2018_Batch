// Complete the almostSorted function below.
function almostSorted(arr) {
    var tempArr1 = arr.slice();
    arr.sort((a, b) => { return a - b; });
    var tempArr2 = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] != tempArr1[i]) {
            tempArr2.push(i);
        }
    }
    if (tempArr1.length === 2) {
        console.log("yes");
        console.log("swap " + (tempArr2[0] + 1) + " " + (tempArr2[1] + 1));
    }
    else if (tempArr2.length === 0) {
        console.log("yes");
    }
    else {
        var l = tempArr2[0], r = tempArr2[tempArr2.length - 1];
        while (l < r) {
            var temp = tempArr1[l];
            tempArr1[l] = tempArr1[r];
            tempArr1[r] = temp;
            l++;
            r--;
        }
    }
    var h = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] != tempArr1[i]) {
            h.push(i);
        }
    }
    if (h.length === 0) {
        console.log("yes");
        console.log("reverse " + (tempArr2[0] + 1) + " " + (tempArr2[tempArr2.length - 1] + 1));
    }
    else if (h.length > 0 && tempArr2.length > 2) {
        console.log("no");
    }
}