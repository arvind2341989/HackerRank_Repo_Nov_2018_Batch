/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    var num = 0;
    var count = new Array(100).fill(0);

    for (let i = 0; i < a.length; i++){
        count[a[i]]++;
    }

    for (let i = 2; i < 100; i++){
        num = Math.max(num, count[i] + count[i - 1]);
    }
    return num;
}