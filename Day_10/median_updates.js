
// Returns median of a sorted array
function median() {
    let len = this.length
    if (len % 2 == 0)
        // TODO - formatting they want
        return (this[len >> 1] + this[(len >> 1) - 1]) / 2
    else
        return this[len >> 1]
}


// Custom b-search, returns tuple of [found: Boolean, index: Int]
function binaryIndexOf(el) {
    let min = 0
    let max = this.length - 1
    let currentIndex
    let currentElement

    while (min <= max) {
        currentIndex = (min + max) >> 1 | 0 // Fancy way of doing Math.floor((min + max) / 2)
        currentElement = this[currentIndex]

        if (currentElement < el)
            min = currentIndex + 1
        else if (currentElement > el)
            max = currentIndex - 1
        else
            return [true, currentIndex]

    }
    return [false, Math.abs(~max)]
}


Array.prototype.binaryIndexOf = binaryIndexOf
Array.prototype.median = median


function processData(input) {
    let input_arr = _input.split("\n")
    let n = parseInt(input_arr.shift())
    let op
    let val
    let err_message = "Wrong!"
    let result_tuple
    let index
    let exists
    let wrong = false
    let arr = [] // keep it sorted!

    for (let i = 0; i < n; i++) {

        [op, val] = input_arr[i].split(' ')
        val = parseInt(val)
        result_tuple = arr.binaryIndexOf(val)
        index = result_tuple[1]
        exists = result_tuple[0]

        // 1. do operation
        if (op === "r") {
            // If item isn't in list, output "Wrong!"
            if (!exists) wrong = true
            else arr.splice(index, 1)
        } else {
            arr.splice(index, 0, val)
        }

        // 2. print median
        if (wrong || typeof arr[0] === 'undefined') console.log(err_message)
        else console.log(arr.median())
        wrong = false
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});