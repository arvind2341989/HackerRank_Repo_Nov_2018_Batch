function introTutorial(V, arr) {
    var a = 0
    for (var i in arr) {
        if (arr[i] == V)
            return a;

        else {
            a += 1
        }
    }
    
}