function isValid(s) {
    var arr = s.split("");
    var countArray = new Array(26);
    countArray.fill(0);

    for (let i = 0; i < arr.length; i++) {
        var key = arr[i].charCodeAt() - 97;
        countArray[key]++;
    }
    var count = 0, flag = "YES"; var freqmap = {};
    for (let i = 0; i < 26; i++) {
        if (countArray[i] != 0) {
            freqmap[countArray[i]] || (freqmap[countArray[i]] = 0);
            freqmap[countArray[i]]++;
        }
    }

    var key1, key2;
    for (var key in freqmap) {
        count++;
        if (!key1)
            key1 = key;
        else
            key2 = key;
        if (count > 2)
            break;
    }
    if (count > 2)
        flag = "NO";
    else if (count == 2) {
        if (Math.abs(key1 - key2) > 1)
            flag = "NO";
        if (key1 - 0 > key2 - 0 && freqmap[key1] != 1)
            flag = "NO";
        if (key1 - 0 < key2 - 0 && freqmap[key2] != 1)
            flag = "NO";
        if ((key1 == 1 && freqmap[key1] == 1) || (key2 == 1 && freqmap[key2] == 1))
            flag = "YES";
    }
    return flag;
}