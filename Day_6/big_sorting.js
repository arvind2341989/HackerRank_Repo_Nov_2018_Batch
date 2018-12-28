// Complete the bigSorting function below.
function bigSorting(unsorted) {
    unsorted.sort(function (a, b) {
        if (a.length == b.length) {
            if (a < b) return -1;
            else if (a > b) return 1;
            else return 0;
        }
        else if (a.length < b.length) return -1;
        else return 1;
    });

    return unsorted;

}