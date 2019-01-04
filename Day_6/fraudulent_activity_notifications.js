function processData(input) {
    //Enter your code here
    input = input.split("\n");
    var data = input[0].split(" ");
    var n = parseInt(data[0]);    
    var d = parseInt(data[1]);
    var notifications = 0;
    data = input[1].split(" ").map(function(item) {
        return parseInt(item);
    });
    var period = new Array(200+1).join('0').split('').map(parseFloat);
  
    for (var i = 0; i < d; i++) {
        period[data[i]]++;
    }
    
    for (var i = d; i < data.length; i++) {
        if (data[i] >= 2 * getMedian(period)) {
            notifications = notifications + 1;
        }
        replaceNum(data[i - d], data[i], period);
    }
    console.log(notifications);

    function getMedian(array) {
        var medianPosition1 = Math.floor(d/2) - 1;
        var medianPosition2 = medianPosition1 + 1;
        var currentIndex = 0;
        var itemCount = 0;
        var answer = false;
        while (!answer) {
            itemCount = itemCount + array[currentIndex];
            if (itemCount >= medianPosition1 + 1) {
                firstMedian = currentIndex;
                while (!answer) {
                    if (itemCount >= medianPosition2 + 1) {
                        secondMedian = currentIndex;
                        answer = true;
                    }
                    else
                    {
                        currentIndex++;
                        itemCount = itemCount + array[currentIndex];                        
                    }
                }
            }
            currentIndex++;
        }
        if (d % 2 == 0) {
            return (firstMedian + secondMedian)/2;
        }
        else
        {
            return secondMedian;        
        }
    }

    function replaceNum(oldNum, newNum, array) {
        array[oldNum]--;
        array[newNum]++;
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