function countSort(arr) {
    let list = [];

    let maxHalf = (Math.floor(arr.length) / 2) - 1;

    for (let i = 0; i < arr.length; i++) {
        if (!(typeof list[arr[i][0]] === 'string')) {
            list[arr[i][0]] = '';
        }
        list[arr[i][0]] += (i <= maxHalf ? '- ' : arr[i][1] + ' ');
    }

    let string = '';
    for (let row = 0; row < list.length; row++) {
        if (list[row]) {
            string += list[row];
        }
    }

    console.log(string);

}