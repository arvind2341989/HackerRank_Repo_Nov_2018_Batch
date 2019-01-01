// Complete the funnyString function below.
function funnyString(s) {
    var reverseStr = s.split('').reverse().join('');
    var count = 0;
    for (let i = 0; i < reverseStr.length - 1; i++){
        let revDiff = Math.abs(reverseStr.charCodeAt(i + 1) - reverseStr.charCodeAt(i));

        let strDiff = Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));

        if (revDiff === strDiff) count++;
    }
    return count === s.length - 1 ? 'Funny' : 'Not Funny';
}