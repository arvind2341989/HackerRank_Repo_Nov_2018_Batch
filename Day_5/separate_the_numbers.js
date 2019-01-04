function separateNumbers(s) {
    var charArray = s.split('');
    var stringLength = s.length;
    var windowLength = 1;
    var sb;
    while (windowLength <= parseInt(stringLength / 2)) {
        var firstElement = 0;
        var nextNumber = 0;
        var flag = false;
        for (var i = 0; i < stringLength; i++) {
            var consider;
            if (i == 0) {
                flag = true;
                consider = windowLength;
            }
            else {
                consider = ('' + nextNumber).length;
            }
            sb = "";
            while (consider > 0) {
                if (i < stringLength) {
                    sb += charArray[i];
                }
                consider--;
                if (consider != 0) { i++; }
            }
            var number = parseInt(sb); 
            if (flag) {
                firstElement = number;
                nextNumber = number + 1;
                flag = false;
                continue;
            }
            else {
                if (nextNumber == number) {
                    if (i == stringLength - 1) {
                        console.log("YES " + firstElement);
                        return;
                    }
                    nextNumber = number + 1;
                }
                else {
                    break;
                }
            }
        }
        windowLength++;
    }
    console.log("NO");
}