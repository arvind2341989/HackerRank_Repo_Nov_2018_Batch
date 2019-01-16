// Complete the solve function below.
function build_perm(n, dist, already, tracker, answers) {
    if (already.length >= n) {
        answers.push(already.slice())
        return
    }
    var p1 = already[already.length - 1] + dist
    var p2 = already[already.length - 1] - dist
    for (var h2 = 1; h2 < p2 + 1; h2++) {
        if (!tracker[h2]) {
            tracker[h2] = true
            already.push(h2)
            build_perm(n, dist, already, tracker, answers)
            tracker[h2] = false
            already.pop()
        }
    }

    for (var h1 = p1; h1 < n + 1; h1++) {
        if (!tracker[h1]) {
            tracker[h1] = true
            already.push(h1)
            build_perm(n, dist, already, tracker, answers)
            tracker[h1] = false
            already.pop()
        }
    }
    return
}

function solve(n, k) {
    var dist = Math.floor(n / 2)
    var answers = []
    var finalAns = []
    var tracker = [false]
    for (var i = 1; i < n + 1; i++) {
        for (var t = 1; t < n + 1; t++) {
            tracker[t] = false
        }
        let already = [i]
        tracker[i] = true
        build_perm(n, dist, already, tracker, answers)
    }
    if (answers.length >= k) {
        for (let a of answers[k - 1]) {
            process.stdout.write(a + " ")
            finalAns.push(a);
        }
        return finalAns;
    } else {
        return [-1]
    }
}