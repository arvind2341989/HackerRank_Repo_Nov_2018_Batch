function separateNumbers(s) {
    var str = s.toString();
    var numLen = str.length;
    var firstNum = 0;
    var increment = 0;
    var testStr = '';


    for (var i = 1; i <= (numLen / 2); i++) {
        firstNum = parseInt(str.substr(0, i));
        testStr = firstNum.toString();
        increment = firstNum;

        while (testStr.length < numLen && str != testStr){
            // this part needs help in javaScript because it only works up to 53bits
            increment++;
            testStr += increment.toString();
        } 

        if (testStr == str) {
            break;
        }
    }

    if (testStr == str) {
        console.log("YES " + firstNum);
    }

    else if (testStr != str) {
        console.log("NO");
    }

    else if (numLen < 1) {
        console.log("NO");
    }
}
