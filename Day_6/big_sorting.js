function bigSorting(unsorted) {
    unsorted.sort((a, b) => {

        if (a.length == b.length) {

            return a > b ? 1 : -1;

        }

        return a.length - b.length;

    });

    return unsorted;  

}