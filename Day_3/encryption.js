function encryption(s) {
    var stringArray = s.split('');
    var squareRoot = Math.sqrt(stringArray.length);
    var leftLimit = parseInt(Math.floor(squareRoot));
    var rightLimit = parseInt(Math.ceil(squareRoot));
    var count = 0;
    var transposeList = [];
    for (var i = 0; i < stringArray.length; i++) {
        count = (i + 1) % rightLimit;
        transposeList.push(stringArray[i]);
        if (count == 0) {
            // and  i is not equal to length - 1
            transposeList.push(" ");
        }
    }

    var sb = "";
    for (var stemp of transposeList)
    {
        sb += stemp;
    }
    var newArray = sb.toString().split(" ");
    var newResult = "";
    for (var i = 0; i < rightLimit; i++) {
        for (var j = 0; j < newArray.length; j++) {
            if (i <= newArray[j].length - 1) {
                newResult += "" + newArray[j].charAt(i);
            }
        }
        newResult += " ";
    }
    return newResult;
}