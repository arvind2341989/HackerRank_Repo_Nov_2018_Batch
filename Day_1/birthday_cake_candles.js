function birthdayCakeCandles(ar) {
    var count=0, max_temp=0,max=0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > max)
            max = ar[i];
    }
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == max)
            count++;
    }

    return count;

}