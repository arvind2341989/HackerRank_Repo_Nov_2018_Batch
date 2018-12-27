// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    var jump = 0;
    for (let i = 0; i < c.length-1; i++) {
        if (c[i] != c[i + 1]) {
            i++;
            jump++;
        }
        if (c[i] == c[i + 1]) {
            if (c[i + 1] == c[i + 2] && (i+2 < c.length)) {
                i++;
                jump++;
            } else {
                jump++;
            }
        }
    }
    return jump;
}