function pickingNumbers(a) {
    a.sort();
    var max = 0;

    var res = [];
    for (var i = 0; i < a.length; i++) {
        var count = 1;
        for (var j = i + 1; j < a.length; j++) {
            var x = (Math.abs(a[i] - a[j]));

            if (x <= 1) {


                count++;
                if (count > max)
                    max = count;
            }
            else {

                if (count > max)
                    max = count;
                count = 0;
            }

        }
    }
    return (max);
}