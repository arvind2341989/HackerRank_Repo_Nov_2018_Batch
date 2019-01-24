function organizingContainers(container) {
    const n = container.length;
    const a = [n];
    const b = [n];

    for (var i = 0; i < n; i++) {
        a[i] = 0;
        b[i] = 0;
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            let ball = container[i][j];
            a[i] += ball;
            b[j] += ball;
        }
    }

    var pts = "Possible";

    for (var i = 0; i < n; i++) {

        var j = 0;

        for (j = i; j < n; j++) {
            if (a[i] == b[j]) {
                var temp = b[j];
                b[j] = b[i];
                b[i] = temp;
                break;
            }
        }

        if (j == n) {
            pts = "Impossible";
            break;
        }
    }
    return pts;

}
