// Complete the biggerIsGreater function below.
// reference: Next Lexographical Permutation Algorithm
//https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
function biggerIsGreater(arr) {
    var array = arr.split('');
    // Find longest non-increasing suffix
    var i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i])
        i--;
    // Now i is the head index of the suffix

    // Are we at the last permutation already?
    if (i <= 0)
        return "no answer";

    // Let array[i - 1] be the pivot
    // Find rightmost element that exceeds the pivot
    var j = array.length - 1;
    while (array[j] <= array[i - 1])
        j--;
    // Now the value array[j] will become the new pivot
    // Assertion: j >= i

    // Swap the pivot with j
    var temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse the suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }

    // Successfully computed the next permutation
    return array.join('');
}